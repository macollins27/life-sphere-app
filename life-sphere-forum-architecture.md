# Life Sphere Forum Architecture

## Design Principles

1. **Feature-based organization** — Group by domain, not by file type
2. **Colocation** — Keep related code together
3. **Clear boundaries** — Separate data, business logic, and presentation
4. **Scalability** — Structure that grows without reorganization
5. **Testability** — Easy to unit test and integration test

---

## Folder Structure

```
life-sphere/
├── prisma/
│   ├── schema.prisma
│   ├── migrations/
│   └── seed.ts
│
├── src/
│   ├── app/                          # Next.js App Router
│   │   ├── (marketing)/              # Public marketing pages (grouped)
│   │   │   ├── page.tsx              # Homepage
│   │   │   ├── about/
│   │   │   │   └── page.tsx
│   │   │   └── contact/
│   │   │       └── page.tsx
│   │   │
│   │   ├── (forum)/                  # Forum pages (grouped, can share layout)
│   │   │   ├── layout.tsx            # Forum-specific layout wrapper
│   │   │   ├── community/
│   │   │   │   ├── page.tsx          # Category list
│   │   │   │   ├── [categorySlug]/
│   │   │   │   │   ├── page.tsx      # Thread list
│   │   │   │   │   └── [threadSlug]/
│   │   │   │   │       └── page.tsx  # Thread detail + replies
│   │   │   │   └── new/
│   │   │   │       └── page.tsx      # Create thread
│   │   │   └── members/
│   │   │       ├── page.tsx          # Member directory
│   │   │       └── [username]/
│   │   │           └── page.tsx      # Public profile
│   │   │
│   │   ├── (auth)/                   # Auth pages
│   │   │   ├── login/
│   │   │   │   └── page.tsx
│   │   │   ├── register/
│   │   │   │   └── page.tsx
│   │   │   └── forgot-password/
│   │   │       └── page.tsx
│   │   │
│   │   ├── dashboard/                # Authenticated user area
│   │   │   ├── layout.tsx
│   │   │   ├── page.tsx              # User dashboard
│   │   │   ├── settings/
│   │   │   │   └── page.tsx
│   │   │   └── notifications/
│   │   │       └── page.tsx
│   │   │
│   │   ├── admin/                    # Admin panel
│   │   │   ├── layout.tsx
│   │   │   ├── page.tsx
│   │   │   ├── users/
│   │   │   │   └── page.tsx
│   │   │   ├── categories/
│   │   │   │   └── page.tsx
│   │   │   └── moderation/
│   │   │       └── page.tsx
│   │   │
│   │   ├── api/                      # API routes
│   │   │   ├── auth/
│   │   │   │   └── [...nextauth]/
│   │   │   │       └── route.ts
│   │   │   ├── trpc/
│   │   │   │   └── [trpc]/
│   │   │   │       └── route.ts
│   │   │   └── webhooks/
│   │   │       └── route.ts
│   │   │
│   │   ├── layout.tsx                # Root layout
│   │   ├── error.tsx
│   │   ├── not-found.tsx
│   │   └── globals.css
│   │
│   ├── modules/                      # Domain modules (the core)
│   │   │
│   │   ├── auth/
│   │   │   ├── components/
│   │   │   │   ├── login-form.tsx
│   │   │   │   ├── register-form.tsx
│   │   │   │   └── auth-provider.tsx
│   │   │   ├── services/
│   │   │   │   └── auth.service.ts
│   │   │   ├── hooks/
│   │   │   │   └── use-session.ts
│   │   │   ├── types.ts
│   │   │   └── index.ts              # Public exports
│   │   │
│   │   ├── forum/
│   │   │   ├── components/
│   │   │   │   ├── category-card.tsx
│   │   │   │   ├── category-list.tsx
│   │   │   │   ├── thread-card.tsx
│   │   │   │   ├── thread-list.tsx
│   │   │   │   ├── thread-detail.tsx
│   │   │   │   ├── post-item.tsx
│   │   │   │   ├── post-list.tsx
│   │   │   │   ├── post-editor.tsx
│   │   │   │   ├── create-thread-form.tsx
│   │   │   │   └── reply-form.tsx
│   │   │   ├── services/
│   │   │   │   ├── category.service.ts
│   │   │   │   ├── thread.service.ts
│   │   │   │   └── post.service.ts
│   │   │   ├── hooks/
│   │   │   │   ├── use-categories.ts
│   │   │   │   ├── use-threads.ts
│   │   │   │   └── use-posts.ts
│   │   │   ├── types.ts
│   │   │   └── index.ts
│   │   │
│   │   ├── users/
│   │   │   ├── components/
│   │   │   │   ├── user-avatar.tsx
│   │   │   │   ├── user-profile-card.tsx
│   │   │   │   ├── user-stats.tsx
│   │   │   │   └── member-list.tsx
│   │   │   ├── services/
│   │   │   │   └── user.service.ts
│   │   │   ├── hooks/
│   │   │   │   └── use-user.ts
│   │   │   ├── types.ts
│   │   │   └── index.ts
│   │   │
│   │   ├── moderation/
│   │   │   ├── components/
│   │   │   │   ├── report-button.tsx
│   │   │   │   ├── report-modal.tsx
│   │   │   │   └── moderation-queue.tsx
│   │   │   ├── services/
│   │   │   │   └── moderation.service.ts
│   │   │   ├── types.ts
│   │   │   └── index.ts
│   │   │
│   │   └── notifications/
│   │       ├── components/
│   │       │   ├── notification-bell.tsx
│   │       │   ├── notification-list.tsx
│   │       │   └── notification-item.tsx
│   │       ├── services/
│   │       │   └── notification.service.ts
│   │       ├── types.ts
│   │       └── index.ts
│   │
│   ├── shared/                       # Shared across modules
│   │   ├── components/
│   │   │   ├── ui/                   # Primitive UI components
│   │   │   │   ├── button.tsx
│   │   │   │   ├── input.tsx
│   │   │   │   ├── textarea.tsx
│   │   │   │   ├── select.tsx
│   │   │   │   ├── modal.tsx
│   │   │   │   ├── dropdown.tsx
│   │   │   │   ├── badge.tsx
│   │   │   │   ├── avatar.tsx
│   │   │   │   ├── card.tsx
│   │   │   │   ├── skeleton.tsx
│   │   │   │   └── index.ts
│   │   │   └── layout/
│   │   │       ├── header.tsx
│   │   │       ├── footer.tsx
│   │   │       ├── nav.tsx
│   │   │       ├── sidebar.tsx
│   │   │       └── index.ts
│   │   ├── hooks/
│   │   │   ├── use-debounce.ts
│   │   │   ├── use-local-storage.ts
│   │   │   ├── use-media-query.ts
│   │   │   └── use-intersection-observer.ts
│   │   ├── utils/
│   │   │   ├── cn.ts                 # className utility (clsx + twMerge)
│   │   │   ├── format-date.ts
│   │   │   ├── format-relative-time.ts
│   │   │   ├── slugify.ts
│   │   │   └── validators.ts
│   │   └── constants/
│   │       └── index.ts
│   │
│   ├── server/                       # Server-only code
│   │   ├── db/
│   │   │   └── index.ts              # Prisma client singleton
│   │   ├── trpc/
│   │   │   ├── router.ts             # Root router
│   │   │   ├── trpc.ts               # tRPC instance
│   │   │   ├── context.ts
│   │   │   └── routers/
│   │   │       ├── auth.router.ts
│   │   │       ├── forum.router.ts
│   │   │       ├── user.router.ts
│   │   │       └── moderation.router.ts
│   │   └── services/                 # Server-only services
│   │       ├── email.service.ts
│   │       └── upload.service.ts
│   │
│   ├── lib/                          # Third-party configurations
│   │   ├── auth.ts                   # NextAuth config
│   │   ├── trpc.ts                   # tRPC client
│   │   └── env.ts                    # Environment validation
│   │
│   └── types/                        # Global types
│       ├── next-auth.d.ts            # NextAuth type extensions
│       └── global.d.ts
│
├── public/
│   ├── images/
│   └── fonts/
│
├── tests/
│   ├── unit/
│   ├── integration/
│   └── e2e/
│
├── .env.example
├── .env.local
├── .gitignore
├── next.config.ts
├── tailwind.config.ts
├── tsconfig.json
├── package.json
└── README.md
```

---

## Prisma Schema

```prisma
// prisma/schema.prisma

generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}

// ============================================================================
// AUTH & USERS
// ============================================================================

model User {
  id            String    @id @default(cuid())
  email         String    @unique
  emailVerified DateTime?
  username      String    @unique
  displayName   String?
  passwordHash  String?
  avatarUrl     String?
  bio           String?
  location      String?
  website       String?
  
  role          UserRole  @default(MEMBER)
  status        UserStatus @default(ACTIVE)
  
  // Stats (denormalized for performance)
  postCount     Int       @default(0)
  threadCount   Int       @default(0)
  reputation    Int       @default(0)
  
  // Timestamps
  createdAt     DateTime  @default(now())
  updatedAt     DateTime  @updatedAt
  lastSeenAt    DateTime?
  
  // Relations
  accounts      Account[]
  sessions      Session[]
  threads       Thread[]
  posts         Post[]
  reactions     Reaction[]
  notifications Notification[]
  
  // Moderation
  reportsCreated    Report[]      @relation("ReportCreator")
  reportsReceived   Report[]      @relation("ReportTarget")
  moderationActions ModerationLog[] @relation("Moderator")
  
  @@index([email])
  @@index([username])
  @@index([status])
  @@map("users")
}

model Account {
  id                String  @id @default(cuid())
  userId            String
  type              String
  provider          String
  providerAccountId String
  refresh_token     String? @db.Text
  access_token      String? @db.Text
  expires_at        Int?
  token_type        String?
  scope             String?
  id_token          String? @db.Text
  session_state     String?

  user User @relation(fields: [userId], references: [id], onDelete: Cascade)

  @@unique([provider, providerAccountId])
  @@index([userId])
  @@map("accounts")
}

model Session {
  id           String   @id @default(cuid())
  sessionToken String   @unique
  userId       String
  expires      DateTime
  
  user User @relation(fields: [userId], references: [id], onDelete: Cascade)

  @@index([userId])
  @@map("sessions")
}

model VerificationToken {
  identifier String
  token      String   @unique
  expires    DateTime

  @@unique([identifier, token])
  @@map("verification_tokens")
}

enum UserRole {
  MEMBER
  MODERATOR
  ADMIN
  SUPER_ADMIN
}

enum UserStatus {
  ACTIVE
  SUSPENDED
  BANNED
  PENDING_VERIFICATION
}

// ============================================================================
// FORUM STRUCTURE
// ============================================================================

model Category {
  id          String   @id @default(cuid())
  name        String
  slug        String   @unique
  description String?
  icon        String?  // Icon name or emoji
  color       String?  // Hex color for UI
  
  // Ordering & visibility
  sortOrder   Int      @default(0)
  isVisible   Boolean  @default(true)
  isLocked    Boolean  @default(false)
  
  // Permissions (JSON for flexibility)
  permissions Json     @default("{}")
  
  // Stats (denormalized)
  threadCount Int      @default(0)
  postCount   Int      @default(0)
  
  // Hierarchy (optional subcategories)
  parentId    String?
  parent      Category?  @relation("CategoryHierarchy", fields: [parentId], references: [id])
  children    Category[] @relation("CategoryHierarchy")
  
  // Timestamps
  createdAt   DateTime @default(now())
  updatedAt   DateTime @updatedAt
  
  // Relations
  threads     Thread[]
  
  @@index([slug])
  @@index([parentId])
  @@index([sortOrder])
  @@map("categories")
}

model Thread {
  id          String   @id @default(cuid())
  title       String
  slug        String
  
  // Content for the opening post (stored here for query efficiency)
  content     String   @db.Text
  contentHtml String?  @db.Text  // Pre-rendered HTML (optional)
  
  // Thread state
  status      ThreadStatus @default(OPEN)
  isPinned    Boolean  @default(false)
  isLocked    Boolean  @default(false)
  isFeatured  Boolean  @default(false)
  
  // Stats (denormalized)
  postCount   Int      @default(0)
  viewCount   Int      @default(0)
  reactionCount Int    @default(0)
  
  // Timestamps
  createdAt   DateTime @default(now())
  updatedAt   DateTime @updatedAt
  lastPostAt  DateTime @default(now())
  
  // Relations
  authorId    String
  author      User     @relation(fields: [authorId], references: [id])
  
  categoryId  String
  category    Category @relation(fields: [categoryId], references: [id])
  
  posts       Post[]
  reactions   Reaction[]
  tags        TagsOnThreads[]
  
  @@unique([categoryId, slug])
  @@index([authorId])
  @@index([categoryId])
  @@index([status])
  @@index([isPinned, lastPostAt])
  @@index([createdAt])
  @@index([lastPostAt])
  @@map("threads")
}

model Post {
  id          String   @id @default(cuid())
  content     String   @db.Text
  contentHtml String?  @db.Text
  
  // Post state
  isEdited    Boolean  @default(false)
  isDeleted   Boolean  @default(false)  // Soft delete
  
  // Stats
  reactionCount Int    @default(0)
  
  // Position in thread (for pagination)
  position    Int      @default(0)
  
  // Timestamps
  createdAt   DateTime @default(now())
  updatedAt   DateTime @updatedAt
  editedAt    DateTime?
  
  // Relations
  authorId    String
  author      User     @relation(fields: [authorId], references: [id])
  
  threadId    String
  thread      Thread   @relation(fields: [threadId], references: [id], onDelete: Cascade)
  
  // Reply hierarchy (optional nested replies)
  parentId    String?
  parent      Post?    @relation("PostReplies", fields: [parentId], references: [id])
  replies     Post[]   @relation("PostReplies")
  
  reactions   Reaction[]
  
  @@index([authorId])
  @@index([threadId])
  @@index([parentId])
  @@index([threadId, position])
  @@index([createdAt])
  @@map("posts")
}

enum ThreadStatus {
  OPEN
  CLOSED
  ARCHIVED
  DELETED
}

// ============================================================================
// TAGS
// ============================================================================

model Tag {
  id          String   @id @default(cuid())
  name        String   @unique
  slug        String   @unique
  description String?
  color       String?
  
  usageCount  Int      @default(0)
  
  createdAt   DateTime @default(now())
  
  threads     TagsOnThreads[]
  
  @@index([slug])
  @@map("tags")
}

model TagsOnThreads {
  threadId  String
  thread    Thread   @relation(fields: [threadId], references: [id], onDelete: Cascade)
  
  tagId     String
  tag       Tag      @relation(fields: [tagId], references: [id], onDelete: Cascade)
  
  createdAt DateTime @default(now())
  
  @@id([threadId, tagId])
  @@index([tagId])
  @@map("tags_on_threads")
}

// ============================================================================
// REACTIONS
// ============================================================================

model Reaction {
  id        String       @id @default(cuid())
  type      ReactionType
  
  userId    String
  user      User         @relation(fields: [userId], references: [id], onDelete: Cascade)
  
  // Polymorphic: reaction can be on thread OR post
  threadId  String?
  thread    Thread?      @relation(fields: [threadId], references: [id], onDelete: Cascade)
  
  postId    String?
  post      Post?        @relation(fields: [postId], references: [id], onDelete: Cascade)
  
  createdAt DateTime     @default(now())
  
  @@unique([userId, threadId])
  @@unique([userId, postId])
  @@index([threadId])
  @@index([postId])
  @@map("reactions")
}

enum ReactionType {
  LIKE
  LOVE
  INSIGHTFUL
  HELPFUL
  CELEBRATE
}

// ============================================================================
// NOTIFICATIONS
// ============================================================================

model Notification {
  id        String           @id @default(cuid())
  type      NotificationType
  title     String
  message   String?
  link      String?
  metadata  Json             @default("{}")
  
  isRead    Boolean          @default(false)
  readAt    DateTime?
  
  userId    String
  user      User             @relation(fields: [userId], references: [id], onDelete: Cascade)
  
  createdAt DateTime         @default(now())
  
  @@index([userId, isRead])
  @@index([userId, createdAt])
  @@map("notifications")
}

enum NotificationType {
  THREAD_REPLY
  POST_REPLY
  MENTION
  REACTION
  FOLLOW
  SYSTEM
  MODERATION
}

// ============================================================================
// MODERATION
// ============================================================================

model Report {
  id          String       @id @default(cuid())
  type        ReportType
  reason      String
  details     String?      @db.Text
  status      ReportStatus @default(PENDING)
  
  // Who created the report
  creatorId   String
  creator     User         @relation("ReportCreator", fields: [creatorId], references: [id])
  
  // Who/what is being reported
  targetUserId  String?
  targetUser    User?      @relation("ReportTarget", fields: [targetUserId], references: [id])
  
  targetThreadId String?
  targetPostId   String?
  
  // Resolution
  resolvedAt    DateTime?
  resolvedById  String?
  resolution    String?
  
  createdAt   DateTime     @default(now())
  updatedAt   DateTime     @updatedAt
  
  @@index([status])
  @@index([creatorId])
  @@index([targetUserId])
  @@map("reports")
}

model ModerationLog {
  id          String          @id @default(cuid())
  action      ModerationAction
  reason      String?
  details     Json            @default("{}")
  
  moderatorId String
  moderator   User            @relation("Moderator", fields: [moderatorId], references: [id])
  
  targetUserId   String?
  targetThreadId String?
  targetPostId   String?
  
  createdAt   DateTime        @default(now())
  
  @@index([moderatorId])
  @@index([targetUserId])
  @@index([createdAt])
  @@map("moderation_logs")
}

enum ReportType {
  SPAM
  HARASSMENT
  INAPPROPRIATE
  MISINFORMATION
  OTHER
}

enum ReportStatus {
  PENDING
  REVIEWING
  RESOLVED
  DISMISSED
}

enum ModerationAction {
  WARN
  MUTE
  SUSPEND
  BAN
  UNBAN
  DELETE_POST
  DELETE_THREAD
  LOCK_THREAD
  UNLOCK_THREAD
  PIN_THREAD
  UNPIN_THREAD
  EDIT_CONTENT
}

// ============================================================================
// SEARCH & ANALYTICS (Optional)
// ============================================================================

model SearchIndex {
  id          String   @id @default(cuid())
  entityType  String   // 'thread' | 'post' | 'user'
  entityId    String
  content     String   @db.Text
  metadata    Json     @default("{}")
  
  updatedAt   DateTime @updatedAt
  
  @@unique([entityType, entityId])
  @@index([entityType])
  @@map("search_index")
}
```

---

## Key Architectural Decisions

### 1. Feature-Based Modules (`src/modules/`)

Each domain (auth, forum, users, moderation) is self-contained with its own:
- Components (UI)
- Services (business logic)
- Hooks (React state)
- Types (TypeScript interfaces)

This means when you work on "forum," everything you need is in one place.

### 2. Shared vs Module Code

- **Shared**: Generic UI components, utilities, hooks that could work in any project
- **Module**: Domain-specific code that only makes sense in context of that feature

### 3. Server-Only Code (`src/server/`)

Keeps database access, tRPC routers, and server services completely separate from client code. No accidental database imports in client bundles.

### 4. Denormalized Counts

Notice `postCount`, `threadCount`, etc. on User and Category. These are intentionally denormalized. You update them via triggers or in your service layer. This avoids expensive COUNT queries on every page load.

### 5. Soft Deletes

Posts have `isDeleted` instead of actually being deleted. This preserves thread continuity and allows recovery.

### 6. Slug + Parent Unique Constraint

`@@unique([categoryId, slug])` on Thread means slugs only need to be unique within a category. You can have `/mental-health/getting-started` and `/nutrition/getting-started`.

### 7. tRPC for API

Instead of REST routes scattered everywhere, tRPC gives you end-to-end type safety. Your frontend knows exactly what the backend returns.

---

## Service Layer Example

```typescript
// src/modules/forum/services/thread.service.ts

import { db } from '@/server/db'
import { slugify } from '@/shared/utils/slugify'
import type { CreateThreadInput, ThreadWithAuthor } from '../types'

export const threadService = {
  async create(input: CreateThreadInput, authorId: string): Promise<ThreadWithAuthor> {
    const slug = slugify(input.title)
    
    const thread = await db.$transaction(async (tx) => {
      // Create thread
      const thread = await tx.thread.create({
        data: {
          title: input.title,
          slug,
          content: input.content,
          categoryId: input.categoryId,
          authorId,
        },
        include: {
          author: true,
          category: true,
        },
      })
      
      // Update denormalized counts
      await tx.category.update({
        where: { id: input.categoryId },
        data: { threadCount: { increment: 1 } },
      })
      
      await tx.user.update({
        where: { id: authorId },
        data: { threadCount: { increment: 1 } },
      })
      
      return thread
    })
    
    return thread
  },
  
  async getBySlug(categorySlug: string, threadSlug: string) {
    return db.thread.findFirst({
      where: {
        slug: threadSlug,
        category: { slug: categorySlug },
        status: { not: 'DELETED' },
      },
      include: {
        author: true,
        category: true,
        posts: {
          where: { isDeleted: false },
          include: { author: true },
          orderBy: { position: 'asc' },
        },
      },
    })
  },
  
  // ... more methods
}
```

---

## What This Gets You

1. **Scalability**: Add new features without restructuring
2. **Maintainability**: Clear boundaries, easy to find code
3. **Testability**: Services can be unit tested in isolation
4. **Type Safety**: End-to-end with Prisma + tRPC
5. **Performance**: Denormalized counts, proper indexes
6. **Flexibility**: JSON fields for permissions/metadata that might evolve
