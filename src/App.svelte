<script>
  let noteDate = $state("");
  let noteTitle = $state("");
  let noteContent = $state("");

  /**
   * @type {{ date: string, title: string, content: string }[]}
   */
  let notes = $state([]);

  let selectedMonth = $state("all");

  let filteredNotes =  $derived(
    selectedMonth === "all"
        ? notes
        : notes.filter((note) => note.date.slice(5, 7) === selectedMonth)
  )

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
        <input id="note-date" type="date" bind:value={noteDate} required />
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

    <div class="month-filter">
      <label for="month-filter">Visa månad</label>

      <select id="month-filter" bind:value={selectedMonth}>
        <option value="all">Alla månader</option>
        <option value="01">Januari</option>
        <option value="02">Februari</option>
        <option value="03">Mars</option>
        <option value="04">April</option>
        <option value="05">Maj</option>
        <option value="06">Juni</option>
        <option value="07">Juli</option>
        <option value="08">Augusti</option>
        <option value="09">September</option>
        <option value="10">Oktober</option>
        <option value="11">November</option>
        <option value="12">December</option>
      </select>
    </div>
  </section>

  <section class="saved-notes">
    <h2>Sparade anteckningar</h2>
    <p>Antal anteckningar: {filteredNotes.length}</p>

    {#if filteredNotes.length === 0}
      <p>Inga anteckningar sparade än.</p>
    {:else}
      <ul>
        {#each filteredNotes as note}
          <li>
            <strong>{note.date} - {note.title}</strong>
            <p>{note.content}</p>
          </li>
        {/each}
      </ul>
    {/if}
  </section>
</main>
