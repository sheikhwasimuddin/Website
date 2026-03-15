import React, { useState, useEffect } from "react";
import DisplayLottie from "../../components/displayLottie/DisplayLottie";
import footballerAnimation from "../../assets/lottie/Footballer.json";
import "./FootballFan.scss";

const favoriteTeam = {
  name: "Real Madrid",
  badge: "https://upload.wikimedia.org/wikipedia/en/5/56/Real_Madrid_CF.svg",
  league: "La Liga",
  founded: "1902",
  tagline: "Hala Madrid!"
};

const favoritePlayer = {
  name: "Federico Valverde",
  position: "Midfielder",
  number: 8,
  club: "Real Madrid",
  nationality: "🏴󠁧󠁢󠁥󠁮󠁧 Uruguay",
  tagline: "El Halcón"
};

const footballStats = [
  { label: "Years as Fan", value: "7+" },
  { label: "Matches Watched", value: "300+" },
  { label: "Goals Celebrated", value: "∞" },

];

function formatMatchDate(utcDate) {
  const date = new Date(utcDate);
  return date.toLocaleDateString("en-GB", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric"
  });
}

function formatMatchTime(utcDate) {
  const date = new Date(utcDate);
  return date.toLocaleTimeString("en-GB", {
    hour: "2-digit",
    minute: "2-digit",
    timeZoneName: "short"
  });
}

function getCountdown(utcDate) {
  const now = new Date();
  const match = new Date(utcDate);
  const diff = match - now;
  if (diff <= 0) return "Starting soon!";
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const mins = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  if (days > 0) return `${days}d ${hours}h ${mins}m`;
  if (hours > 0) return `${hours}h ${mins}m`;
  return `${mins}m`;
}

export default function FootballFan() {
  const [nextMatch, setNextMatch] = useState(null);
  const [matchLoading, setMatchLoading] = useState(true);
  const [matchError, setMatchError] = useState(false);
  const [countdown, setCountdown] = useState("");

  useEffect(() => {
    fetch("/nextMatch.json")
      .then(res => {
        if (!res.ok) throw new Error("Not found");
        return res.json();
      })
      .then(data => {
        if (data.nextMatch) {
          setNextMatch(data.nextMatch);
          setCountdown(getCountdown(data.nextMatch.utcDate));
        }
        setMatchLoading(false);
      })
      .catch(() => {
        setMatchError(true);
        setMatchLoading(false);
      });
  }, []);

  useEffect(() => {
    if (!nextMatch) return;
    const timer = setInterval(() => {
      setCountdown(getCountdown(nextMatch.utcDate));
    }, 60000);
    return () => clearInterval(timer);
  }, [nextMatch]);

  return (
    <div className="football-main" id="football">

      {/* Header */}
      <div className="football-header">
        <div className="football-title-wrap">
          <span className="football-ball-icon">⚽</span>
          <h3 className="football-heading">Beyond The Code</h3>
          <span className="football-ball-icon">⚽</span>
        </div>
        <p className="football-subheading">
          When I'm not coding, you'll find me screaming at a football match 🎉
        </p>
      </div>

      {/* ── Row 1: Cards left | Lottie right ── */}
      <div className="football-hero">

        {/* Left: team + player cards SIDE BY SIDE + stats below */}
        <div className="football-cards">
          <div className="football-cards-row">
            <div className="football-card team-card">
              <div className="card-shine"></div>
              <img src={favoriteTeam.badge} alt="Real Madrid Badge" className="team-badge-img" />
              <div className="card-label">Favourite Club</div>
              <h2 className="team-name">{favoriteTeam.name}</h2>
              <p className="team-meta">{favoriteTeam.league} · Founded {favoriteTeam.founded}</p>
              <div className="team-tagline">{favoriteTeam.tagline}</div>
            </div>

            <div className="football-card player-card">
              <div className="card-shine"></div>
              <div className="player-number">#{favoritePlayer.number}</div>
              <div className="card-label">Favourite Player</div>
              <h2 className="player-name">{favoritePlayer.name}</h2>
              <p className="player-meta">{favoritePlayer.position} · {favoritePlayer.club}</p>
              <p className="player-nationality">{favoritePlayer.nationality}</p>
              <div className="player-tagline">{favoritePlayer.tagline}</div>
            </div>
          </div>

          {/* Stats — right below the cards */}
          <div className="football-stats">
            {footballStats.map((stat, i) => (
              <div key={i} className="stat-item">
                <div className="stat-value">{stat.value}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Lottie animation */}
        <div className="football-lottie">
          <DisplayLottie animationData={footballerAnimation} />
        </div>
      </div>

      {/* ── Next Match Banner ── */}
      <div className="next-match-section">
        <div className="next-match-label">
          <span className="live-dot"></span> Next Match
        </div>

        {matchLoading && (
          <div className="next-match-card next-match-loading">
            <div className="nm-skeleton nm-skeleton-wide"></div>
            <div className="nm-skeleton nm-skeleton-narrow"></div>
          </div>
        )}

        {!matchLoading && matchError && (
          <div className="next-match-card next-match-error">
            <p>Could not load next match data.</p>
          </div>
        )}

        {!matchLoading && !matchError && !nextMatch && (
          <div className="next-match-card next-match-error">
            <p>No scheduled matches found.</p>
          </div>
        )}

        {!matchLoading && !matchError && nextMatch && (
          <div className="next-match-card">
            <div className="nm-competition">
              {nextMatch.competition?.emblem && (
                <img
                  src={nextMatch.competition.emblem}
                  alt={nextMatch.competition.name}
                  className="nm-competition-logo"
                />
              )}
              <span>{nextMatch.competition?.name}</span>
              {nextMatch.matchday && (
                <span className="nm-matchday">· Matchday {nextMatch.matchday}</span>
              )}
            </div>

            <div className="nm-teams">
              <div className="nm-team">
                {nextMatch.homeTeam?.crest && (
                  <img src={nextMatch.homeTeam.crest} alt={nextMatch.homeTeam.name} className="nm-crest" />
                )}
                <span className="nm-team-name">{nextMatch.homeTeam?.shortName || nextMatch.homeTeam?.name}</span>
              </div>

              <div className="nm-vs-block">
                <span className="nm-vs">VS</span>
                <div className="nm-countdown">{countdown}</div>
              </div>

              <div className="nm-team">
                {nextMatch.awayTeam?.crest && (
                  <img src={nextMatch.awayTeam.crest} alt={nextMatch.awayTeam.name} className="nm-crest" />
                )}
                <span className="nm-team-name">{nextMatch.awayTeam?.shortName || nextMatch.awayTeam?.name}</span>
              </div>
            </div>

            <div className="nm-datetime">
              <span className="nm-date">📅 {formatMatchDate(nextMatch.utcDate)}</span>
              <span className="nm-time">🕐 {formatMatchTime(nextMatch.utcDate)}</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
