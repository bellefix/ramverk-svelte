<script>
  let noteDate = $state("");
  let noteTitle = $state("");
  let noteContent = $state("");

  /**
   * @type {{ date: string, title: string, content: string }[]}
   */
  let notes = $state([]);

  /**
   * @param {SubmitEvent} event
   */
  function handleSubmit(event) {
    // Förhindra att formuläret skickas och sidan laddas om
    event.preventDefault();

    // Lägg till den nya anteckningen i listan över anteckningar
    notes.push({
      date: noteDate,
      title: noteTitle,
      content: noteContent,
    });

    // Töm formuläret efter att anteckningen har sparats
    noteDate = "";
    noteTitle = "";
    noteContent = "";
  }
</script>

<main class="notes-app">
  <section class="note-form">
    <h1>Lektionsanteckningar</h1>

    <form onsubmit={handleSubmit}>
      <div class="form-group">
        <label for="note-date">Datum</label>
        <input id="note-date" type="date" bind:value={noteDate} required/>
      </div>

      <div class="form-group">
        <label for="note-title">Rubrik</label>
        <input
          id="note-title"
          type="text"
          bind:value={noteTitle}
          placeholder="Vad handlade lektionen om?"
          required
        />
      </div>

      <div class="form-group">
        <label for="note-content">Anteckning</label>
        <textarea
          id="note-content"
          rows="12"
          bind:value={noteContent}
          placeholder="Skriv dina anteckningar här..."
          required
        ></textarea>
      </div>

      <button type="submit">Spara anteckning</button>
    </form>
  </section>

  <section class="saved-notes">
    <h2>Sparade anteckningar</h2>
    <p>Antal anteckningar: {notes.length}</p>

    {#if notes.length === 0}
      <p>Inga anteckningar sparade än.</p>
    {:else}
      <ul>
        {#each notes as note}
          <li>
            <strong>{note.date} - {note.title}</strong>
            <p>{note.content}</p>
          </li>
        {/each}
      </ul>
    {/if}
  </section>
</main>
