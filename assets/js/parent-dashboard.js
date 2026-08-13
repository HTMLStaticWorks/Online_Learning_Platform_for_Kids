document.addEventListener('DOMContentLoaded', () => {
  // === PARENT DASHBOARD INTERACTIVE TABS ===
  const parentSidebar = document.querySelector('.parent-sidebar');
  if (parentSidebar) {
    const parentTabBtns = parentSidebar.querySelectorAll('.dashboard-nav-item');
    const parentPanels = document.querySelectorAll('.parent-panel');

    parentTabBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const targetTab = btn.dataset.tab;
        if (!targetTab) return;

        // Reset active state
        parentTabBtns.forEach(b => b.classList.remove('active'));
        parentPanels.forEach(p => p.classList.add('d-none'));

        // Set active state
        btn.classList.add('active');
        const targetPanel = document.getElementById(`parent-panel-${targetTab}`);
        if (targetPanel) {
          targetPanel.classList.remove('d-none');
        }
      });
    });
  }

  // === DYNAMIC CHILD SELECTION ===
  const childSelector = document.getElementById('childSelector');
  if (childSelector) {
    childSelector.addEventListener('change', (e) => {
      const selectedChild = e.target.value;
      const childNames = document.querySelectorAll('.selected-child-name');
      const childAges = document.querySelectorAll('.selected-child-age');
      
      childNames.forEach(el => {
        el.textContent = selectedChild === 'emma' ? 'Emma' : 'Leo';
      });

      childAges.forEach(el => {
        el.textContent = selectedChild === 'emma' ? 'Age 6' : 'Age 9';
      });

      // Show/Hide courses according to child profile
      const emmaCourses = document.getElementById('emmaCourses');
      const leoCourses = document.getElementById('leoCourses');

      if (selectedChild === 'emma') {
        if (emmaCourses) emmaCourses.classList.remove('d-none');
        if (leoCourses) leoCourses.classList.add('d-none');
      } else {
        if (emmaCourses) emmaCourses.classList.add('d-none');
        if (leoCourses) leoCourses.classList.remove('d-none');
      }
    });
  }

  // === SCREEN TIME / STUDY TIME LIMITS SLIDER ===
  const studyLimitSlider = document.getElementById('studyTimeLimit');
  if (studyLimitSlider) {
    const limitDisplay = document.getElementById('timeLimitVal');
    studyLimitSlider.addEventListener('input', (e) => {
      if (limitDisplay) {
        limitDisplay.textContent = e.target.value + ' minutes';
      }
    });

    const saveLimitsBtn = document.getElementById('saveLimitsBtn');
    if (saveLimitsBtn) {
      saveLimitsBtn.addEventListener('click', () => {
        alert(`Setting updated! Study limit set to ${studyLimitSlider.value} minutes per day.`);
      });
    }
  }

  // === PARENT SAFETY CONTROLS FORM ===
  const safetyControlsForm = document.getElementById('safetyControlsForm');
  if (safetyControlsForm) {
    safetyControlsForm.addEventListener('submit', (e) => {
      e.preventDefault();
      alert('Parental safety overrides and category permissions have been saved successfully.');
    });
  }
});
