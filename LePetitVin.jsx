
import { useState } from 'react';

function LePetitVin() {
  return (
    <div style={{
      backgroundColor: "#fdfaf6",
      color: "#3e2d23",
      minHeight: "100vh",
      padding: "2rem",
      fontFamily: "Georgia, serif"
    }}>
      <header style={{ textAlign: "center", paddingBottom: "2rem" }}>
        <h1 style={{ fontSize: "3rem", fontWeight: "bold" }}>Le Petit Vin</h1>
        <p style={{ fontSize: "1.25rem", fontStyle: "italic" }}>
          Sleep where the stories of wine begin.
        </p>
      </header>

      <main style={{ maxWidth: "800px", margin: "0 auto" }}>
        <section style={{ marginBottom: "2rem" }}>
          <h2 style={{ fontSize: "2rem", fontWeight: "bold" }}>Welcome to Hageland's Wine Retreat</h2>
          <p>
            Nestled in the heart of Hageland, Le Petit Vin is a micro B&B experience for wine lovers. Your stay includes a curated wine tasting, cozy atmosphere, and the charm of Flemish wine country.
          </p>
        </section>

        <section style={{ marginBottom: "2rem" }}>
          <h2 style={{ fontSize: "2rem", fontWeight: "bold" }}>Wine-Themed Packages</h2>
          <ul>
            <li><strong>Base Stay:</strong> 1 night + welcome wine</li>
            <li><strong>Tasting Stay:</strong> Includes a 3-wine guided tasting</li>
            <li><strong>Romantic Retreat:</strong> Premium wines, candles, and keepsake gift</li>
          </ul>
        </section>

        <section>
          <h2 style={{ fontSize: "2rem", fontWeight: "bold" }}>Book Your Stay</h2>
          <form>
            <label>
              Name:<br />
              <input type="text" style={{ width: "100%", marginBottom: "1rem" }} />
            </label><br />
            <label>
              Email:<br />
              <input type="email" style={{ width: "100%", marginBottom: "1rem" }} />
            </label><br />
            <label>
              Preferred Date:<br />
              <input type="date" style={{ width: "100%", marginBottom: "1rem" }} />
            </label><br />
            <label>
              Select Package:<br />
              <select style={{ width: "100%", marginBottom: "1rem" }}>
                <option>Base Stay</option>
                <option>Tasting Stay</option>
                <option>Romantic Retreat</option>
              </select>
            </label><br />
            <label>
              Message (optional):<br />
              <textarea style={{ width: "100%", marginBottom: "1rem" }} />
            </label><br />
            <button type="submit" style={{ width: "100%", padding: "0.5rem", backgroundColor: "#3e2d23", color: "#fff" }}>
              Request Booking
            </button>
          </form>
        </section>
      </main>

      <footer style={{ textAlign: "center", marginTop: "2rem", color: "#7b5e4b" }}>
        &copy; {new Date().getFullYear()} Le Petit Vin — A Wine Escape in Hageland
      </footer>
    </div>
  );
}

export default LePetitVin;
