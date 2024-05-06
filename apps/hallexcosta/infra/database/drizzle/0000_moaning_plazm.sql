CREATE TABLE `achievements` (
	`id` text PRIMARY KEY NOT NULL,
	`content` text DEFAULT '',
	`with_dot` integer,
	`duration` text,
	`work_experience_id` text,
	`created_at` integer,
	`updated_at` integer,
	FOREIGN KEY (`work_experience_id`) REFERENCES `work_experiences`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE TABLE `contacts` (
	`id` text PRIMARY KEY NOT NULL,
	`website` text DEFAULT '',
	`github` text DEFAULT '',
	`linkedin` text DEFAULT '',
	`city` text DEFAULT '',
	`state` text DEFAULT '',
	`email` text DEFAULT '',
	`phone` text DEFAULT '',
	`person_id` text,
	`created_at` integer,
	`updated_at` integer,
	FOREIGN KEY (`person_id`) REFERENCES `persons`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE TABLE `persons` (
	`id` text PRIMARY KEY NOT NULL,
	`username` text,
	`email` text DEFAULT '',
	`name` text,
	`role` text,
	`summary` text,
	`skills` text,
	`created_at` integer,
	`updated_at` integer
);
--> statement-breakpoint
CREATE TABLE `work_experiences` (
	`id` text PRIMARY KEY NOT NULL,
	`enterprise` text,
	`role` text,
	`type` text,
	`start_date` integer,
	`end_date` integer,
	`currently_position` integer,
	`person_id` text,
	`created_at` integer,
	`updated_at` integer,
	FOREIGN KEY (`person_id`) REFERENCES `persons`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE UNIQUE INDEX `persons_username_unique` ON `persons` (`username`);