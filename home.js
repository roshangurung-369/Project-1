
  const SPORTS = {
    football:   { label: '⚽ Football',   icon: '⚽' },
    basketball: { label: '🏀 Basketball', icon: '🏀' },
    cricket:    { label: '🏏 Cricket',    icon: '🏏' },
    tennis:     { label: '🎾 Tennis',     icon: '🎾' },
    volleyball: { label: '🏐 Volleyball', icon: '🏐' },
    swimming:   { label: '🏊 Swimming',   icon: '🏊' },
  };

  const data = JSON.parse(localStorage.getItem('sportWeekData') || '{}');
  Object.keys(SPORTS).forEach(s => { if (!data[s]) data[s] = []; });

  function save() { localStorage.setItem('sportWeekData', JSON.stringify(data)); }

  function render() {
    const container = document.getElementById('sportSections');
    container.innerHTML = '';
    Object.entries(SPORTS).forEach(([key, meta]) => {
      const players = data[key] || [];
      const card = document.createElement('div');
      card.className = 'sport-card';
      card.innerHTML = `
        <div class="sport-card-header">
          <span class="sport-icon">${meta.icon}</span>
          <span class="sport-name">${meta.label.split(' ').slice(1).join(' ')}</span>
          <small style="margin-left:auto;color:var(--muted)">${players.length}</small>
        </div>
        <ul class="player-list" id="list-${key}">
          ${players.length === 0
            ? '<li class="empty-msg" style="background:none;padding-left:.2rem">No participants yet</li>'
            : players.map((n, i) => `<li>${n}<button class="remove-btn" onclick="removePlayer('${key}', ${i})">✕</button></li>`).join('')}
        </ul>`;
      container.appendChild(card);
    });
  }

  function addPlayer() {
    const sport = document.getElementById('sportSelect').value;
    const name  = document.getElementById('playerName').value.trim();
    if (!sport) { alert('Please select a sport first.'); return; }
    if (!name)  { alert('Please enter a participant name.'); return; }
    data[sport].push(name);
    save(); render();
    document.getElementById('playerName').value = '';
    document.getElementById('sportSelect').value = '';
  }

  function removePlayer(sport, idx) {
    data[sport].splice(idx, 1);
    save(); render();
  }

  document.getElementById('playerName').addEventListener('keydown', e => {
    if (e.key === 'Enter') addPlayer();
  });

  render();
