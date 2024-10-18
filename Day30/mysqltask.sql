create database SQL02;
use SQL02;

create table users(
user_id int primary key,
username varchar(255),
email varchar(255),
createdAt datetime 
 );
 
 create table students(
 student_id int primary key,
 user_id int,
 full_name varchar(255),
 address varchar(255),
 phone_number varchar(10),
 qualification text,
 work_experience text
 );
 
 create table mentors(
 mentor_id int primary key,
 user_id int,
 full_name varchar(255),
 address varchar(255),
 phone_number varchar(10),
 qualification text,
 work_experience text
 );
 
 create table topics(
 topic_id int primary key,
 topic_name varchar(255),
 description text,
 sessions int,
 mentor_id int
 );
 
 
 create table tasks(
 task_id int primary key,
 topic_id int,
 task_name varchar(255),
 description text,
 deadline date
 );
 
 create table attendance(
 attendance_id int primary key,
 user_id int,
 topic_id int,
 session_date date,
 status varchar(255)
 );
 
 
 alter table students add foreign key(user_id)references users (user_id);
 alter table mentors add foreign key (user_id) references users (user_id);
 alter table topics add foreign key (mentor_id) references mentors (mentor_id);
 alter table tasks add foreign key (topic_id) references topics (topic_id);
 alter table attendance add foreign key (topic_id) references topics (topic_id);
 alter table attendance add foreign key (user_id) references users (user_id);
