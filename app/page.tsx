"use client";

import { FormEvent, useState } from "react";
import { lunara } from "@/lib/lunara";

const BOOK_KEY = "lunara-glow-book-requests-v1";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [status, setStatus] = useState("");
  const [error, setError] = useState(false);

  function onBook(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const row = {
      name: String(fd.get("name") || "").trim(),
      email: String(fd.get("email") || "").trim(),
      service: String(fd.get("service") || "").trim(),
      day: String(fd.get("day") || "").trim(),
      notes: String(fd.get("notes") || "").trim(),
      at: new Date().toISOString(),
    };

    if (!row.name || !row.email || !row.service || !row.day) {
      setError(true);
      setStatus("Name, email, service, and day are required.");
      return;
    }

    try {
      const prev = JSON.parse(localStorage.getItem(BOOK_KEY) || "[]") as unknown[];
      prev.push(row);
      localStorage.setItem(BOOK_KEY, JSON.stringify(prev.slice(-50)));
    } catch {
      /* ignore */
    }

    setError(false);
    setStatus(`Got it, ${row.name.split(" ")[0]}. ${row.service} · ${row.day}.`);
    e.currentTarget.reset();
  }

  const serviceOptions = lunara.services.flatMap((g) =>
    g.items.map((item) => `${g.title}: ${item.name} (${item.price})`)
  );

  return (
    <>
      <header className="top">
        <a className="logo" href="#top">
          {lunara.shortName}
        </a>
        <nav className="nav" aria-label="Main">
          <a href="#services">Services</a>
          <a href="#visit">Visit</a>
          <a href="#book">Book</a>
        </nav>
        <a className="nav-phone" href={`tel:${lunara.phoneDial}`}>
          {lunara.phone}
        </a>
        <button
          type="button"
          className="menu-btn"
          aria-expanded={menuOpen}
          aria-controls="drawer"
          onClick={() => setMenuOpen((v) => !v)}
        >
          Menu
        </button>
      </header>

      <div className="drawer" id="drawer" hidden={!menuOpen}>
        <a href="#services" onClick={() => setMenuOpen(false)}>
          Services
        </a>
        <a href="#visit" onClick={() => setMenuOpen(false)}>
          Visit
        </a>
        <a href="#book" onClick={() => setMenuOpen(false)}>
          Book
        </a>
        <a href={`tel:${lunara.phoneDial}`} onClick={() => setMenuOpen(false)}>
          Call {lunara.phone}
        </a>
      </div>

      <main id="top">
        <section className="hero">
          <p className="kicker">Astoria · brows · lashes · wax · facials</p>
          <h1>{lunara.name}</h1>
          <p className="lead">
            Same menu as our Fresha book — exact names, prices, and times.
          </p>
          <p className="sub">
            {lunara.address}. Open {lunara.hours.toLowerCase()}. First visit
            gets 20% off. Loyalty points toward free brow threading.
          </p>
          <div className="hero-actions">
            <a className="btn" href={lunara.freshaUrl} target="_blank" rel="noreferrer">
              Book on Fresha
            </a>
            <a className="btn btn-ghost" href={`tel:${lunara.phoneDial}`}>
              Call
            </a>
            <a className="btn btn-ghost" href="#services">
              See menu
            </a>
          </div>
          <div className="meta-row">
            <span>
              <strong>Offer</strong> · {lunara.offer}
            </span>
            <span>
              <strong>Hours</strong> · {lunara.hours}
            </span>
            <span>
              <strong>Points</strong> · {lunara.loyalty}
            </span>
          </div>
        </section>

        <section className="section" id="services">
          <div className="section-head">
            <h2>Menu</h2>
            <p>What we do. What it costs. How long.</p>
          </div>

          {lunara.services.map((group) => (
            <div className="service-block" key={group.id} id={group.id}>
              <h3>{group.title}</h3>
              <table className="menu">
                <thead>
                  <tr>
                    <th scope="col">Service</th>
                    <th scope="col">Time</th>
                    <th scope="col">Price</th>
                  </tr>
                </thead>
                <tbody>
                  {group.items.map((item) => (
                    <tr key={`${group.id}-${item.name}-${item.price}`}>
                      <td>
                        <strong>{item.name}</strong>
                        {"description" in item && item.description ? (
                          <span className="desc">{item.description}</span>
                        ) : null}
                      </td>
                      <td>{item.time}</td>
                      <td>{item.price}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ))}
        </section>

        <section className="section split">
          <div>
            <h2>Good to know</h2>
            <ul className="plain">
              <li>{lunara.offer}</li>
              <li>{lunara.loyalty}</li>
              <li>Call or book below — same day if the book is open.</li>
              <li>Bring a reference photo for brows/lashes if you have one.</li>
            </ul>
          </div>
          <div>
            <h2>From Yelp</h2>
            <ul className="reviews">
              {lunara.reviews.map((r) => (
                <li key={r.author}>
                  <q>{r.quote}</q>
                  <cite>{r.author}</cite>
                </li>
              ))}
            </ul>
            <p style={{ marginTop: 12, fontSize: 13 }}>
              <a href={lunara.yelp} target="_blank" rel="noreferrer">
                More on Yelp →
              </a>
            </p>
          </div>
        </section>

        <section className="section two-col" id="visit">
          <div>
            <h2>Visit</h2>
            <dl className="facts">
              <div>
                <dt>Address</dt>
                <dd>{lunara.address}</dd>
              </div>
              <div>
                <dt>Hours</dt>
                <dd>{lunara.hours}</dd>
              </div>
              <div>
                <dt>Phone</dt>
                <dd>
                  <a href={`tel:${lunara.phoneDial}`}>{lunara.phone}</a>
                </dd>
              </div>
              <div>
                <dt>Email</dt>
                <dd>
                  <a href={`mailto:${lunara.email}`}>{lunara.email}</a>
                </dd>
              </div>
              <div>
                <dt>IG</dt>
                <dd>{lunara.instagram}</dd>
              </div>
            </dl>
          </div>

          <div className="book" id="book">
            <h2>Book</h2>
            <p className="book-help">
              Prefer the live book?{" "}
              <a href={lunara.freshaUrl} target="_blank" rel="noreferrer">
                Open Fresha
              </a>
              . Or send a request here (saved on this device). Call{" "}
              {lunara.phone} for same-day.
            </p>
            <form className="book-form" onSubmit={onBook}>
              <label>
                Name
                <input name="name" type="text" required autoComplete="name" />
              </label>
              <label>
                Email
                <input name="email" type="email" required autoComplete="email" />
              </label>
              <label className="wide">
                Service
                <select name="service" required defaultValue="">
                  <option value="" disabled>
                    Select
                  </option>
                  {serviceOptions.map((opt) => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
              </label>
              <label>
                Day
                <input name="day" type="date" required />
              </label>
              <label className="wide">
                Notes
                <textarea
                  name="notes"
                  rows={3}
                  placeholder="Staff preference, timing, first visit…"
                />
              </label>
              <button type="submit" className="btn wide-btn">
                Send request
              </button>
              <p className={`status${error ? " is-error" : ""}`} role="status">
                {status}
              </p>
            </form>
          </div>
        </section>
      </main>

      <footer className="foot">
        <span>
          {lunara.shortName} · Astoria
        </span>
        <span>{new Date().getFullYear()}</span>
      </footer>
    </>
  );
}
