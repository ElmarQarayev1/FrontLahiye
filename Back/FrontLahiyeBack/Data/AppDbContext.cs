using System;
using Core;
using Microsoft.EntityFrameworkCore;

namespace Data
{
	public class AppDbContext:DbContext
	{
        public DbSet<Course> Courses { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlServer("Server=localhost;Database=CourseFrontLahiye;User ID=sa; Password=reallyStrongPwd123;TrustServerCertificate=true;");
        }
    }
}

