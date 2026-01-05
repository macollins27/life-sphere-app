"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button, Input, Textarea } from "@/shared/components/ui";

interface CreateThreadFormProps {
  categoryId: string;
  categorySlug: string;
}

export function CreateThreadForm({ categoryId, categorySlug }: CreateThreadFormProps) {
  const router = useRouter();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!title.trim()) {
      setError("Title is required");
      return;
    }

    if (!content.trim()) {
      setError("Content is required");
      return;
    }

    setIsLoading(true);

    try {
      const response = await fetch("/api/forum/threads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title: title.trim(),
          content: content.trim(),
          categoryId,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        setError(data.error || "Failed to create thread");
        return;
      }

      router.push(`/community/${categorySlug}/${data.slug}`);
      router.refresh();
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

      <Input
        label="Thread Title"
        placeholder="Enter a descriptive title for your thread"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        disabled={isLoading}
        required
      />

      <Textarea
        label="Content"
        placeholder="Share your thoughts, questions, or experiences..."
        value={content}
        onChange={(e) => setContent(e.target.value)}
        disabled={isLoading}
        className="min-h-[200px]"
        required
      />

      <div className="flex items-center justify-end gap-3">
        <Button
          type="button"
          variant="secondary"
          onClick={() => router.back()}
          disabled={isLoading}
        >
          Cancel
        </Button>
        <Button type="submit" disabled={isLoading}>
          {isLoading ? "Creating..." : "Create Thread"}
        </Button>
      </div>
    </form>
  );
}
