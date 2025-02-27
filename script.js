document.addEventListener('DOMContentLoaded', () => {
    // Sample Data
    const students = [
        { name: 'Emma Wilson', email: 'emma.w@example.com', grade: 'A' },
        { name: 'Liam Johnson', email: 'liam.j@example.com', grade: 'B+' },
        { name: 'Olivia Smith', email: 'olivia.s@example.com', grade: 'A-' },
        { name: 'Noah Brown', email: 'noah.b@example.com', grade: 'C+' },
        { name: 'Ava Davis', email: 'ava.d@example.com', grade: 'B' },
    ];

    const teachers = [
        { name: 'Ms. Sophia Patel', email: 'sophia.p@example.com', subject: 'Mathematics' },
        { name: 'Mr. Ethan Wilson', email: 'ethan.w@example.com', subject: 'Physics' },
        { name: 'Dr. Mia Thompson', email: 'mia.t@example.com', subject: 'Chemistry' },
        { name: 'Prof. James Miller', email: 'james.m@example.com', subject: 'Biology' },
        { name: 'Mrs. Charlotte Davis', email: 'charlotte.d@example.com', subject: 'Literature' },
    ];

    const assignments = [
        { title: 'Algebra Basics', dueDate: '2024-03-15', status: 'Pending' },
        { title: 'Physics Lab Report', dueDate: '2024-03-18', status: 'Pending' },
        { title: 'Chemical Reactions', dueDate: '2024-03-20', status: 'Pending' },
        { title: 'Biology Research', dueDate: '2024-03-22', status: 'Pending' },
        { title: 'Book Analysis', dueDate: '2024-03-25', status: 'Pending' },
    ];

    // Table Population Functions
    function populateTable(data, tableId, columns) {
        const tbody = document.getElementById(tableId);
        tbody.innerHTML = data.map(item => `
            <tr>
                ${columns.map(col => `<td>${item[col]}</td>`).join('')}
            </tr>
        `).join('');
    }

    // Initialize Tables
    populateTable(students, 'students-table-body', ['name', 'email', 'grade']);
    populateTable(teachers, 'teachers-table-body', ['name', 'email', 'subject']);
    populateTable(assignments, 'assignments-table-body', ['title', 'dueDate', 'status']);

    // Scroll Animations
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('section').forEach(section => observer.observe(section));

    // Smooth Scroll
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const section = document.querySelector(this.getAttribute('href'));
            section.scrollIntoView({ behavior: 'smooth' });
        });
    });

    // Theme Toggle
    const themeToggle = document.createElement('div');
    themeToggle.className = 'theme-toggle';
    themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
    document.body.appendChild(themeToggle);

    themeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-theme');
        themeToggle.innerHTML = document.body.classList.contains('dark-theme') 
            ? '<i class="fas fa-sun"></i>' 
            : '<i class="fas fa-moon"></i>';
    });

    // Assignment Status Toggle
    document.querySelectorAll('#assignments-table-body tr').forEach(row => {
        row.addEventListener('click', () => {
            const statusCell = row.querySelector('td:last-child');
            statusCell.textContent = statusCell.textContent === 'Pending' 
                ? 'Completed 🎉' 
                : 'Pending';
            statusCell.style.color = statusCell.textContent === 'Completed 🎉' 
                ? '#2ecc71' 
                : '#e74c3c';
        });
    });

    // Card Hover Effect
    document.querySelectorAll('.card').forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            card.style.setProperty('--x', `${e.clientX - rect.left}px`);
            card.style.setProperty('--y', `${e.clientY - rect.top}px`);
        });
    });
});
