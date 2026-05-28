(function () {
  var params = new URLSearchParams(window.location.search);
  var role = params.get('role') || localStorage.getItem('lms_role') || 'teacher';
  if (params.get('role')) {
    try { localStorage.setItem('lms_role', role); } catch (e) { /* ignore */ }
  }
  if (role === 'hod') document.body.classList.add('role-hod');

  var pill = document.getElementById('user-role-badge');
  if (pill) pill.textContent = role === 'hod' ? 'HOD' : 'Teacher';

  var nameEl = document.getElementById('user-display-name');
  if (nameEl) {
    nameEl.textContent = role === 'hod' ? 'Dr. Ravi Kumar' : 'Dr. Asha Menon';
  }
})();
