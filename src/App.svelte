<script>
  let noteDate = $state("");
  let noteTitle = $state("");
  let noteContent = $state("");
</script>

<main class="notes-app">
  <section class="note-form">
    <h1>Lektionsanteckningar</h1>

    <form>
      <div class="form-group">
        <label for="note-date">Datum</label>
        <input id="note-date" type="date" bind:value={noteDate} />
      </div>

      <div class="form-group">
        <label for="note-title">Rubrik</label>
        <input
          id="note-title"
          type="text"
          bind:value={noteTitle}
          placeholder="Vad handlade lektionen om?"
        />
      </div>

      <div class="form-group">
        <label for="note-content">Anteckning</label>
        <textarea
          id="note-content"
          rows="12"
          bind:value={noteContent}
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
