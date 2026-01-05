"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button, Textarea } from "@/shared/components/ui";

interface ReplyFormProps {
  threadId: string;
  parentId?: string;
  onCancel?: () => void;
  placeholder?: string;
}

export function ReplyForm({
  threadId,
  parentId,
  onCancel,
  placeholder = "Write your reply..."
}: ReplyFormProps) {
  const router = useRouter();
  const [content, setContent] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!content.trim()) {
      setError("Reply content is required");
      return;
    }

    setIsLoading(true);

    try {
      const response = await fetch(`/api/forum/threads/${threadId}/posts`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          content: content.trim(),
          parentId,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        setError(data.error || "Failed to post reply");
        return;
      }

      setContent("");
      router.refresh();
      onCancel?.();
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {error && (
        <div className="rounded-lg bg-red-50 p-3 text-sm text-red-600">
          {error}
        </div>
      )}

      <Textarea
        placeholder={placeholder}
        value={content}
        onChange={(e) => setContent(e.target.value)}
        disabled={isLoading}
        className="min-h-[120px]"
        required
      />

      <div className="flex items-center justify-end gap-3">
        {onCancel && (
          <Button
            type="button"
            variant="secondary"
            size="sm"
            onClick={onCancel}
            disabled={isLoading}
          >
            Cancel
          </Button>
        )}
        <Button type="submit" size="sm" disabled={isLoading || !content.trim()}>
          {isLoading ? "Posting..." : "Post Reply"}
        </Button>
      </div>
    </form>
  );
}
