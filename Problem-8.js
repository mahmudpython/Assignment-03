let myInfo = {
    personalInfo: {
        name: "M Mahmud",
        age: 23,
        born: 2003,
        gender: "Male",
        nationality: "Bangladeshi",
        religion: "Islam"
    },

    contactInfo: {
        phone: "+8801XXXXXXXXX",
        email: "mahmud@example.com",
        address: {
            village: "Mirpur",
            city: "Dhaka",
            country: "Bangladesh",
            zipCode: 1216
        }
    },

    education: [
        {
            degree: "SSC",
            institute: "Mirpur High School",
            year: 2019,
            result: "GPA 4.50"
        },
        {
            degree: "HSC",
            institute: "Dhaka College",
            year: 2021,
            result: "GPA 4.80"
        },
        {
            degree: "BSc in CSE",
            institute: "National University",
            year: "Running"
        }
    ],

    skills: [
        "JavaScript",
        "HTML",
        "CSS",
        "Android Development",
        "PHP",
        "MySQL"
    ],

    projects: [
        {
            name: "News App",
            technology: ["Java", "Firebase", "API"],
            status: "Completed"
        },
        {
            name: "MyInstagramApp",
            technology: ["Java", "RecyclerView", "API"],
            status: "In Progress"
        }
    ],

    socialLinks: {
        facebook: "https://facebook.com/mahmud",
        github: "https://github.com/mahmudpython",
        linkedin: "https://linkedin.com/in/mahmud"
    },

    hobbies: [
        "Programming",
        "Learning new technology",
        "Reading books",
        "Problem solving"
    ],

    isActive: true
};

console.log(myInfo);
