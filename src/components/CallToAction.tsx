import type { FormEvent } from 'react';

export function CallToAction() {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => e.preventDefault();

  return (
    <section className="cta">
      <div className="container">
        <h2>Your next adventure is one click away</h2>
        <p>
          Join 28,000+ travelers who plan smarter with GoTravelEasy.in. Get exclusive deals &amp; early Travel Along
          invites.
        </p>
        <form className="newsletter" onSubmit={handleSubmit}>
          <input type="email" placeholder="Enter your email address" />
          <button className="btn btn-coral btn-lg" type="submit">
            <i className="fa-solid fa-paper-plane"></i> Get deals
          </button>
        </form>
      </div>
    </section>
  );
}
