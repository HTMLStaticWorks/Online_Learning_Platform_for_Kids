document.addEventListener('DOMContentLoaded', () => {
  // === STUDENT DASHBOARD INTERACTIVE TABS ===
  const dashboardSidebar = document.querySelector('.dashboard-sidebar');
  if (dashboardSidebar) {
    const tabButtons = dashboardSidebar.querySelectorAll('.dashboard-nav-item');
    const contentPanels = document.querySelectorAll('.dashboard-panel');

    tabButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        const targetTab = btn.dataset.tab;
        if (!targetTab) return;

        // Reset active buttons and panels
        tabButtons.forEach(b => b.classList.remove('active'));
        contentPanels.forEach(p => p.classList.add('d-none'));

        // Activate clicked tab
        btn.classList.add('active');
        const targetPanel = document.getElementById(`panel-${targetTab}`);
        if (targetPanel) {
          targetPanel.classList.remove('d-none');
        }
      });
    });
  }

  // === CLAIM DAILY REWARD (STREAK SYSTEM) ===
  const claimRewardBtn = document.getElementById('claimRewardBtn');
  if (claimRewardBtn) {
    claimRewardBtn.addEventListener('click', () => {
      const streakCountEl = document.getElementById('streakCount');
      if (streakCountEl) {
        let currentStreak = parseInt(streakCountEl.textContent) || 0;
        currentStreak++;
        streakCountEl.textContent = currentStreak;

        // Custom micro-animation via inline styles temporarily or playing sound/confetti trigger
        claimRewardBtn.disabled = true;
        claimRewardBtn.textContent = 'Awesome! Reward Claimed 🎉';
        claimRewardBtn.classList.remove('btn-custom-accent');
        claimRewardBtn.classList.add('btn-secondary');

        // Add a beautiful badge unlock alert
        alert(`Superb! You reached a ${currentStreak}-day learning streak! 🌟 Keep it up!`);
      }
    });
  }

  // === MOCK CERTIFICATE PRINT TRIGGER ===
  const certButtons = document.querySelectorAll('.print-cert-btn');
  certButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      const courseName = e.currentTarget.dataset.course || 'Math Wizardry';
      const studentName = prompt('Enter Student Full Name for Certificate:', 'Alex');
      if (!studentName) return;

      const printWindow = window.open('', '_blank');
      printWindow.document.write(`
        <html>
          <head>
            <title>Certificate of Achievement - ${courseName}</title>
            <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@700&family=Nunito:wght@800&family=Inter:wght@400;600&display=swap" rel="stylesheet">
            <style>
              body {
                font-family: 'Inter', sans-serif;
                background-color: #F8FAFC;
                display: flex;
                align-items: center;
                justify-content: center;
                height: 100vh;
                margin: 0;
              }
              .cert-container {
                width: 800px;
                height: 550px;
                padding: 40px;
                background-color: #FFFFFF;
                border: 20px solid #2563EB;
                border-image: linear-gradient(135deg, #2563EB, #7C3AED) 20;
                box-shadow: 0 10px 30px rgba(0,0,0,0.15);
                position: relative;
                text-align: center;
                box-sizing: border-box;
              }
              .title {
                font-family: 'Nunito', sans-serif;
                font-size: 3rem;
                color: #7C3AED;
                margin-top: 20px;
                margin-bottom: 5px;
              }
              .subtitle {
                font-family: 'Poppins', sans-serif;
                font-size: 1.2rem;
                text-transform: uppercase;
                letter-spacing: 2px;
                color: #64748B;
                margin-bottom: 30px;
              }
              .recipient {
                font-family: 'Poppins', sans-serif;
                font-size: 2.2rem;
                font-weight: 700;
                color: #172033;
                border-bottom: 2px solid #E2E8F0;
                display: inline-block;
                padding: 0 40px 10px 40px;
                margin-bottom: 25px;
              }
              .course-title {
                font-size: 1.15rem;
                color: #64748B;
                margin-bottom: 35px;
              }
              .course-name {
                color: #2563EB;
                font-weight: 700;
              }
              .footer-stamp {
                display: flex;
                justify-content: space-around;
                margin-top: 40px;
              }
              .sign {
                border-top: 1px dashed #94A3B8;
                padding-top: 8px;
                width: 150px;
                font-size: 0.85rem;
                color: #64748B;
              }
              .gold-badge {
                width: 70px;
                height: 70px;
                background-color: #F59E0B;
                border-radius: 50%;
                display: flex;
                align-items: center;
                justify-content: center;
                color: #FFFFFF;
                font-size: 2rem;
                box-shadow: 0 4px 10px rgba(245, 158, 11, 0.4);
              }
            </style>
          </head>
          <body>
            <div class="cert-container">
              <div class="subtitle">Certificate of Accomplishment</div>
              <div class="title">Alex's Coding & EdTech Academy</div>
              <div class="recipient">${studentName}</div>
              <div class="course-title">for successfully completing the learning path:<br><span class="course-name">${courseName}</span></div>
              <div class="footer-stamp">
                <div class="sign">Lead Instructor</div>
                <div class="gold-badge">🎓</div>
                <div class="sign">Platform Director</div>
              </div>
            </div>
            <script>
              window.onload = function() {
                window.print();
              };
            </script>
          </body>
        </html>
      `);
      printWindow.document.close();
    });
  });
});
