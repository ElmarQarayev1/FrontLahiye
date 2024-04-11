using System;
namespace Core
{
	public class Course
	{
		public int Id { get; set; }

		public string? Name { get; set; }
		              
		public string? ImgPath { get; set; }
		              
		public string? Description {get;set;}

		public DateTime StartDate { get; set; }

		public int Durations { get; set; }

		public int ClassDurations { get; set; }

		public string? Language { get; set; }

		public int StudentCount { get; set; }

		public int Value { get; set; }

	}
}

