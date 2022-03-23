/*
  Warnings:

  - Added the required column `parent_id` to the `comment` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `comment` ADD COLUMN `parent_id` INTEGER NOT NULL;
