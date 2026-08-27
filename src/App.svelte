<main class="notes-app">
  <section class="note-form">
    <h1>Lektionsanteckningar</h1>

    <form>
      <div class="form-group">
        <label for="note-date">Datum</label>
        <input id="note-date" type="date" />
      </div>

      <div class="form-group">
        <label for="note-title">Rubrik</label>
        <input
          id="note-title"
          type="text"
          placeholder="Vad handlade lektionen om?"
        />
      </div>

      <div class="form-group">
        <label for="note-content">Anteckning</label>
        <textarea
          id="note-content"
          rows="12"
          placeholder="Skriv dina anteckningar här..."
        ></textarea>
      </div>

      <button type="submit">Spara anteckning</button>
    </form>
  </section>

  <section class="saved-notes">
    <h2>Sparade anteckningar</h2>
  </section>
</main>
