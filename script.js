/* =========================
   LOADING ELEMENTS
========================= */

var signalScreen = document.getElementById("signalScreen");

var signalTitle = document.getElementById("signalTitle");

var signalStatus = document.getElementById("signalStatus");

var loadingBar = document.getElementById("loadingBar");

var loadingPercent = document.getElementById("loadingPercent");

var home = document.getElementById("home");

/* =========================
   HOME ELEMENTS
========================= */

var warningPopup = document.getElementById("warningPopup");

var userCount = document.getElementById("userCount");

var alertMessage = document.getElementById("alertMessage");

var connectionStatus = document.getElementById("connectionStatus");

/* =========================
   BUTTONS
========================= */

var newsButton = document.getElementById("newsButton");

var peopleButton = document.getElementById("peopleButton");

var archiveButton = document.getElementById("archiveButton");

var searchButton = document.getElementById("searchButton");

var marketButton = document.getElementById("marketButton");

var systemButton = document.getElementById("systemButton");

/* =========================
   SECTIONS
========================= */

var newsSection = document.getElementById("newsSection");

var peopleSection = document.getElementById("peopleSection");

var archive = document.getElementById("archive");

var searchSection = document.getElementById("searchSection");

var marketSection = document.getElementById("marketSection");

var systemSection = document.getElementById("systemSection");

/* =========================
   PEOPLE
========================= */

var strangePerson = document.getElementById("strangePerson");

var personMessage = document.getElementById("personMessage");

/* =========================
   ARCHIVE
========================= */

var archiveFiles = document.getElementById("archiveFiles");

var archiveDocument = document.getElementById("archiveDocument"); // was missing before — used by openArchiveFile()

var archiveNumber = document.getElementById("archiveNumber");

var archiveTitle = document.getElementById("archiveTitle");

var archiveDate = document.getElementById("archiveDate");

var archiveStatus = document.getElementById("archiveStatus");

var archiveWarning = document.getElementById("archiveWarning");

var archiveText = document.getElementById("archiveText");

var archiveMessage = document.getElementById("archiveMessage");

/* =========================
   SEARCH
========================= */

var searchInput = document.getElementById("searchInput");

var searchSubmit = document.getElementById("searchSubmit");

var resultTitle = document.getElementById("resultTitle");

var resultText = document.getElementById("resultText");

/* =========================
   SYSTEM
========================= */

var systemMessage = document.getElementById("systemMessage");

/* =========================
   LOADING
========================= */

var progress = 0;

var loading = setInterval(function () {
  progress++;

  loadingBar.style.width = progress + "%";

  loadingPercent.textContent = progress + "%";

  if (progress === 30) {
    signalStatus.textContent = "SIGNAL DETECTED";
  }

  if (progress === 60) {
    signalStatus.textContent = "ESTABLISHING CONNECTION...";
  }

  if (progress === 100) {
    clearInterval(loading);

    signalTitle.textContent = "CONNECTION ESTABLISHED";

    signalStatus.textContent = "ACCESS GRANTED";

    setTimeout(function () {
      signalScreen.style.display = "none";

      home.style.display = "block";

      setTimeout(function () {
        warningPopup.classList.add("show");
      }, 1000);

      setTimeout(function () {
        userCount.textContent = "6,284,192 USERS ONLINE";
      }, 3000);

      setTimeout(function () {
        userCount.textContent = "6,284,191 USERS ONLINE";
      }, 5000);

      setTimeout(function () {
        alertMessage.textContent = "FOREIGN CONNECTION DETECTED";

        alertMessage.style.opacity = "1";
      }, 3000);
    }, 800);
  }
}, 50);

/* =========================
   SECTION CONTROL
========================= */

function hideSections() {
  newsSection.style.display = "none";

  peopleSection.style.display = "none";

  archive.style.display = "none";

  searchSection.style.display = "none";

  marketSection.style.display = "none";

  systemSection.style.display = "none";
}

function openSection(section) {
  hideSections();

  section.style.display = "block";

  section.scrollIntoView({
    behavior: "smooth",
  });
}

/* =========================
   MENU BUTTONS
========================= */

newsButton.onclick = function () {
  openSection(newsSection);
};

peopleButton.onclick = function () {
  openSection(peopleSection);
};

archiveButton.onclick = function () {
  openSection(archive);
};

marketButton.onclick = function () {
  openSection(marketSection);
};

systemButton.onclick = function () {
  openSection(systemSection);
};

/* =========================
   FINAL SEARCH DOOR
========================= */

searchButton.onclick = function () {
  openSection(searchSection);

  searchInput.focus();
};

/* =========================
   PEOPLE INTERACTION
========================= */

strangePerson.onclick = function () {
  personMessage.style.display = "block";
};

/* =========================
   ARCHIVE DATA
   (moved out of inline HTML onclick attributes into
   one data array, built with addEventListener instead —
   easier to edit/add files later, and keeps HTML clean)
========================= */

var archiveData = [
  {
    number: 1,
    status: "CLASSIFIED",
    warning: "",
    title: "THE BLACKOUT",
    date: "2031",
    fileStatus: "CLASSIFIED",
    text: "The network disappeared at 03:17 on September 14, 2031. No system failure was recorded. No physical damage was found. The network simply stopped responding. Thousands of users disappeared.",
    message: "There was no blackout.",
  },
  {
    number: 2,
    status: "RESTRICTED",
    warning: "",
    title: "MISSING PERSONS",
    date: "2142",
    fileStatus: "RESTRICTED",
    text: "Missing users continued to appear throughout the following years. Most accounts were deleted. Some remained active but could not be accessed.",
    message: "They were not missing.",
  },
  {
    number: 3,
    status: "CORRUPTED",
    warning: "",
    title: "LAST MESSAGE",
    date: "2139",
    fileStatus: "CORRUPTED",
    text: "A damaged archive containing a message from an unknown sender. The timestamp appears to be impossible. The message was sent before the account existed.",
    message: "If you receive this message, do not answer.",
  },
  {
    number: 4,
    status: "UNKNOWN",
    warning: "YOU SHOULD NOT BE HERE.",
    title: "UNKNOWN USER",
    date: "2031 \u2192 2147",
    fileStatus: "UNKNOWN",
    text: "No registration. No login history. No known origin. The same user appears in records separated by 116 years.",
    message: "I can see someone on the other side.",
  },
  {
    number: 5,
    status: "RESTRICTED",
    warning: "ACCESSING THIS FILE WAS A MISTAKE.",
    title: "DO NOT OPEN",
    date: "UNKNOWN",
    fileStatus: "RESTRICTED",
    text: "This file should not exist. It was created after the archive was restored. Nobody knows who created it. One event was recorded: connection from outside the network.",
    message: "CONNECTION ESTABLISHED.",
  },
];

/* build the archive file buttons from the data above */
archiveData.forEach(function (file) {
  var button = document.createElement("button");

  var numberSpan = document.createElement("span");
  numberSpan.textContent = "00" + file.number;

  button.appendChild(numberSpan);
  button.appendChild(document.createTextNode(file.title));

  button.addEventListener("click", function () {
    openArchiveFile(file);
  });

  archiveFiles.appendChild(button);
});

/* =========================
   ARCHIVE FUNCTION
========================= */

function openArchiveFile(file) {
  archiveNumber.textContent = "FILE 00" + file.number;

  archiveTitle.textContent = file.title;

  archiveDate.textContent = "DATE: " + file.date;

  archiveStatus.textContent = "STATUS: " + file.fileStatus;

  archiveWarning.textContent = file.warning;

  archiveText.textContent = file.text;

  archiveMessage.textContent = file.message;

  archiveDocument.scrollIntoView({
    behavior: "smooth",
  });
}

/* =========================
   SEARCH
========================= */

searchSubmit.onclick = function () {
  var searchValue = searchInput.value.toLowerCase().trim();

  if (searchValue === "") {
    resultTitle.textContent = "NO INPUT";

    resultText.textContent = "ENTER SOMETHING TO SEARCH.";

    return;
  }

  if (searchValue.includes("blackout")) {
    resultTitle.textContent = "THE BLACKOUT";

    resultText.textContent = "1 RESULT FOUND. FILE 001.";
  } else if (searchValue.includes("unknown")) {
    resultTitle.textContent = "UNKNOWN USER";

    resultText.textContent = "1 RESULT FOUND. FILE 004.";
  } else if (searchValue.includes("signal")) {
    resultTitle.textContent = "NO SIGNAL";

    resultText.textContent = "CONNECTION RECORD FOUND.";
  } else if (searchValue === "you") {
    resultTitle.textContent = "USER: YOU";

    resultText.textContent = "ORIGIN: 2026\nSTATUS: ONLINE";

    setTimeout(function () {
      showEnding();
    }, 3000);
  } else {
    resultTitle.textContent = "NO RESULTS";

    resultText.textContent = "NO RECORD MATCHES YOUR SEARCH.";
  }
};

/* allow pressing Enter in the search box, not just clicking the button */
searchInput.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    searchSubmit.click();
  }
});

/* =========================
   SYSTEM MESSAGE
========================= */

systemMessage.onclick = function () {
  systemMessage.textContent = "SYSTEM MESSAGE: WE KNOW YOU ARE STILL HERE.";
};

/* =========================
   ENDING
========================= */

function showEnding() {
  document.body.innerHTML = `
        <main class="ending-screen">
            <p id="endingText"></p>
        </main>
    `;

  var endingText = document.getElementById("endingText");

  var messages = [
    "CONNECTION TERMINATED.",

    "NO SIGNAL",

    "WE'LL TRY AGAIN TOMORROW.",
  ];

  var index = 0;

  function showNextMessage() {
    if (index < messages.length) {
      endingText.textContent = messages[index];

      endingText.classList.add("show");

      index++;

      setTimeout(function () {
        endingText.classList.remove("show");

        setTimeout(showNextMessage, 800);
      }, 2200);
    }
  }

  showNextMessage();
}
