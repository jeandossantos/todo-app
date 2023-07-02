-- CreateTable
CREATE TABLE "user" (
    "id" TEXT NOT NULL,
    "githubId" TEXT,
    "googleId" TEXT,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "user_pkey" PRIMARY KEY ("id")
);
