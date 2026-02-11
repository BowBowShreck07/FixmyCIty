// Storage keys
const STORAGE_KEY = "smartCityPublicWorksReports";
const LOGIN_KEY = "smartCityLoggedIn";
const LANG_KEY = "smartCityLang";

// Translations
const translations = {
  en: {
    appTitle: "Fix My City",
    appSubtitle: "Building a better tomorrow.",
    formTitle: "New Feedback / Issue",
    labelIssueTitle: "Title",
    placeholderIssueTitle: "Example: Street light not working",
    labelCategory: "Category",
    optionSelectCategory: "Select a category",
    optionRoads: "Roads",
    optionStreetLights: "Street Lights",
    optionWasteManagement: "Waste Management",
    optionWaterSupply: "Water Supply",
    optionParks: "Parks & Public Spaces",
    optionOther: "Other",
    labelPriority: "Priority",
    optionPriorityLow: "Low",
    optionPriorityMedium: "Medium",
    optionPriorityHigh: "High",
    labelLocation: "Location",
    placeholderLocation: "Landmark, street name, or area",
    labelDescription: "Description",
    placeholderDescription: "Describe the issue in a few lines",
    btnSubmit: "Submit Report",
    btnClear: "Clear",
    feedTitle: "Public Works Feed",
    feedSubtitle: "Latest reported issues and their status.",
    filterAllStatuses: "All statuses",
    filterOpenOnly: "Open only",
    filterInProgress: "In progress",
    filterResolved: "Resolved",
    sortNewest: "Newest first",
    sortOldest: "Oldest first",
    emptyState:
      "No issues reported yet. Be the first to report a public works problem.",
    footer: "Fix My City \u2022 Demo interface (local only)",

    statsOpenLabel: "Open",
    statsInProgressLabel: "In progress",
    statsResolvedLabel: "Resolved",
    statsTotalLabel: "Total",

    btnClearFeed: "Clear feed",
    confirmClearFeed: "Clear all items from the feed?",

    statusOpen: "Open",
    statusInProgress: "In progress",
    statusResolved: "Resolved",

    cardPriorityLabel: "Priority:",
    labelReported: "Reported:",
    labelUpdated: "Updated:",

    btnMarkInProgress: "In progress",
    btnMarkResolved: "Mark resolved",
    btnReopen: "Reopen",

    alertFillAll: "Please fill in all fields before submitting.",

    loginTitle: "Login",
    loginSubtitle: "Enter your credentials to use the app.",
    loginUsernameLabel: "Username",
    loginUsernamePlaceholder: "Enter username",
    loginPasswordLabel: "Password",
    loginPasswordPlaceholder: "Enter password",
    loginHint: "Demo only: you can use any username and password.",
    loginButton: "Login",
    alertLoginRequired: "Please enter both username and password.",

    successTitle: "Submitted successfully",
    successSubtitle: "Your report has been submitted successfully.",
    successOkLabel: "OK",

    btnEditReport: "Edit",

    labelMobile: "Mobile number",
    placeholderMobile: "Enter your mobile number",

    labelPhoto: "Photo",
    labelVideo: "Video",
    alertPhotoTooLarge: "Photo must be 1 MB or smaller.",
    alertVideoTooLarge: "Video must be 10 MB or smaller.",

    editTitle: "Edit complaint",
    editSave: "Save changes",
    editCancel: "Cancel"
  },
  ta: {
    appTitle: "பிக்ஸ் மை சிட்டி",
    appSubtitle: "நாளைய நகரை இன்னும் சிறப்பாக்குங்கள்.",
    formTitle: "புதிய கருத்து / புகார்",
    labelIssueTitle: "தலைப்பு",
    placeholderIssueTitle: "எடுத்துக்காட்டு: தெரு விளக்கு வேலை செய்யவில்லை",
    labelCategory: "வகை",
    optionSelectCategory: "ஒரு வகையைத் தேர்ந்தெடுக்கவும்",
    optionRoads: "சாலைகள்",
    optionStreetLights: "தெரு விளக்குகள்",
    optionWasteManagement: "கழிவு மேலாண்மை",
    optionWaterSupply: "குடிநீர் வழங்கல்",
    optionParks: "பூங்காக்கள் மற்றும் பொது இடங்கள்",
    optionOther: "மற்றவை",
    labelPriority: "முக்கியத்துவம்",
    optionPriorityLow: "குறைவு",
    optionPriorityMedium: "நடுத்தர",
    optionPriorityHigh: "அதிக",
    labelLocation: "இடம்",
    placeholderLocation: "குறியிடம், தெரு பெயர் அல்லது பகுதி",
    labelDescription: "விவரம்",
    placeholderDescription: "சிக்கலை சில வரிகளில் விவரிக்கவும்",
    btnSubmit: "புகாரை சமர்ப்பிக்கவும்",
    btnClear: "மீட்டமை",
    feedTitle: "பொது பணிகள் தகவல் பட்டியல்",
    feedSubtitle: "அண்மையில் தெரிவிக்கப்பட்ட சிக்கல்கள் மற்றும் அவற்றின் நிலை.",
    filterAllStatuses: "அனைத்து நிலைகளும்",
    filterOpenOnly: "திறந்தவை மட்டும்",
    filterInProgress: "நடைமுறையில்",
    filterResolved: "தீர்க்கப்பட்டது",
    sortNewest: "புதியவை முதலில்",
    sortOldest: "பழையவை முதலில்",
    emptyState:
      "இன்னும் எந்த சிக்கலும் தெரிவிக்கப்படவில்லை. ஒரு பொது பணிகள் சிக்கலை முதலில் நீங்கள் தெரிவிக்கவும்.",
    footer: "பிக்ஸ் மை சிட்டி \u2022 டெமோ இடைமுகம் (உள்ளூர் பயன்பாடு மட்டும்)",

    statsOpenLabel: "திறந்தவை",
    statsInProgressLabel: "நடைமுறையில்",
    statsResolvedLabel: "தீர்க்கப்பட்டது",
    statsTotalLabel: "மொத்தம்",

    btnClearFeed: "பட்டியலை காலி செய்",
    confirmClearFeed: "அனைத்து பதிவுகளையும் நீக்க விரும்புகிறீர்களா?",

    statusOpen: "திறந்தது",
    statusInProgress: "நடைமுறையில்",
    statusResolved: "தீர்க்கப்பட்டது",

    cardPriorityLabel: "முக்கியத்துவம்:",
    labelReported: "புகாரளித்த நாள்:",
    labelUpdated: "மேம்படுத்திய நாள்:",

    btnMarkInProgress: "நடைமுறையில்",
    btnMarkResolved: "தீர்க்கப்பட்டது என குறிக்கவும்",
    btnReopen: "மீண்டும் தொடங்கவும்",

    alertFillAll: "அனைத்து புலங்களையும் நிரப்பி பின்னர் சமர்ப்பிக்கவும்.",

    loginTitle: "உள்நுழைவு",
    loginSubtitle: "பயன்பாட்டைப் பயன்படுத்த உங்கள் விவரங்களை உள்ளிடவும்.",
    loginUsernameLabel: "பயனர் பெயர்",
    loginUsernamePlaceholder: "பயனர் பெயரை உள்ளிடவும்",
    loginPasswordLabel: "கடவுச்சொல்",
    loginPasswordPlaceholder: "கடவுச்சொல்லை உள்ளிடவும்",
    loginHint:
      "டெமோ மட்டும்: நீங்கள் எந்தப் பயனர் பெயர் மற்றும் கடவுச்சொல்லையும் பயன்படுத்தலாம்.",
    loginButton: "உள்நுழை",
    alertLoginRequired: "பயனர் பெயரும் கடவுச்சொல்லும் இரண்டையும் உள்ளிடவும்.",

    successTitle: "வெற்றிகரமாக சமர்ப்பிக்கப்பட்டது",
    successSubtitle: "உங்கள் புகார் வெற்றிகரமாக சமர்ப்பிக்கப்பட்டது.",
    successOkLabel: "சரி",

    btnEditReport: "திருத்து",

    labelMobile: "கைபேசி எண்",
    placeholderMobile: "உங்கள் கைபேசி எண்ணை உள்ளிடவும்",

    labelPhoto: "புகைப்படம்",
    labelVideo: "வீடியோ",
    alertPhotoTooLarge: "புகைப்படம் 1 MB-ஐ விட குறைவாக இருக்க வேண்டும்.",
    alertVideoTooLarge: "வீடியோ 10 MB-ஐ விட குறைவாக இருக்க வேண்டும்.",

    editTitle: "புகாரை திருத்தவும்",
    editSave: "மாற்றங்களை சேமிக்கவும்",
    editCancel: "ரத்து செய்யவும்"
  }
};

let currentLang = localStorage.getItem(LANG_KEY) || "en";

function t(key) {
  const langTable = translations[currentLang] || translations.en;
  return langTable[key] || translations.en[key] || key;
}

let reports = [];
let currentEditId = null;

// Load/save
function loadReports() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    reports = raw ? JSON.parse(raw) : [];
  } catch (e) {
    console.error("Failed to load reports:", e);
    reports = [];
  }
}

function saveReports() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(reports));
  } catch (e) {
    console.error("Failed to save reports:", e);
  }
}

// Helpers
const MAX_PHOTO_BYTES = 1 * 1024 * 1024; // 1 MB
const MAX_VIDEO_BYTES = 10 * 1024 * 1024; // 10 MB

function fileToDataUrl(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result?.toString() || "");
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}

// Form + data
async function createReportFromForm(form) {
  const formData = new FormData(form);
  const title = formData.get("title")?.toString().trim();
  const category = formData.get("category")?.toString().trim();
  const priority = formData.get("priority")?.toString().trim();
  const location = formData.get("location")?.toString().trim();
  const description = formData.get("description")?.toString().trim();
  const phone = formData.get("phone")?.toString().trim();

  const photoInput = form.querySelector("#photoFile");
  const videoInput = form.querySelector("#videoFile");
  const photoFile =
    photoInput && photoInput instanceof HTMLInputElement
      ? photoInput.files?.[0] || null
      : null;
  const videoFile =
    videoInput && videoInput instanceof HTMLInputElement
      ? videoInput.files?.[0] || null
      : null;

  if (photoFile && photoFile.size > MAX_PHOTO_BYTES) {
    alert(t("alertPhotoTooLarge"));
    return null;
  }

  if (videoFile && videoFile.size > MAX_VIDEO_BYTES) {
    alert(t("alertVideoTooLarge"));
    return null;
  }

  if (!title || !category || !priority || !location || !description || !phone) {
    alert(t("alertFillAll"));
    return null;
  }

  const now = new Date();

  const [photoDataUrl, videoDataUrl] = await Promise.all([
    photoFile ? fileToDataUrl(photoFile) : Promise.resolve(""),
    videoFile ? fileToDataUrl(videoFile) : Promise.resolve("")
  ]);

  return {
    id: crypto.randomUUID
      ? crypto.randomUUID()
      : String(Date.now() + Math.random()),
    title,
    category,
    priority,
    location,
    description,
    phone,
    attachments: {
      photo: photoDataUrl
        ? {
            name: photoFile?.name || "",
            size: photoFile?.size || 0,
            type: photoFile?.type || "",
            dataUrl: photoDataUrl
          }
        : null,
      video: videoDataUrl
        ? {
            name: videoFile?.name || "",
            size: videoFile?.size || 0,
            type: videoFile?.type || "",
            dataUrl: videoDataUrl
          }
        : null
    },
    status: "open",
    createdAt: now.toISOString(),
    updatedAt: now.toISOString()
  };
}

function showSuccessOverlay() {
  const overlay = document.getElementById("successOverlay");
  if (!overlay) return;
  overlay.style.display = "flex";
}

function hideSuccessOverlay() {
  const overlay = document.getElementById("successOverlay");
  if (!overlay) return;
  overlay.style.display = "none";
}

function showEditOverlay(report) {
  const overlay = document.getElementById("editOverlay");
  if (!overlay) return;

  currentEditId = report.id;

  const titleInput = document.getElementById("editIssueTitle");
  const categorySelect = document.getElementById("editIssueCategory");
  const prioritySelect = document.getElementById("editIssuePriority");
  const locationInput = document.getElementById("editIssueLocation");
  const phoneInput = document.getElementById("editMobileNumber");
  const descTextarea = document.getElementById("editIssueDescription");

  if (titleInput) titleInput.value = report.title || "";
  if (categorySelect) categorySelect.value = report.category || "";
  if (prioritySelect) prioritySelect.value = report.priority || "Medium";
  if (locationInput) locationInput.value = report.location || "";
  if (phoneInput) phoneInput.value = report.phone || "";
  if (descTextarea) descTextarea.value = report.description || "";

  overlay.style.display = "flex";
}

function hideEditOverlay() {
  const overlay = document.getElementById("editOverlay");
  if (!overlay) return;
  overlay.style.display = "none";
  currentEditId = null;
}

function formatTime(iso) {
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return "";
  return d.toLocaleString(undefined, {
    year: "numeric",
    month: "short",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit"
  });
}

// Stats
function updateStats() {
  const total = reports.length;
  const openCount = reports.filter((r) => r.status === "open").length;
  const inProgressCount = reports.filter(
    (r) => r.status === "in_progress"
  ).length;
  const resolvedCount = reports.filter(
    (r) => r.status === "resolved"
  ).length;

  const statsContainer = document.getElementById("statsSummary");
  if (!statsContainer) return;

  statsContainer.innerHTML = `
    <div class="stat-pill">
      <span class="stat-dot open"></span>
      <span>${t("statsOpenLabel")}: ${openCount}</span>
    </div>
    <div class="stat-pill">
      <span class="stat-dot in-progress"></span>
      <span>${t("statsInProgressLabel")}: ${inProgressCount}</span>
    </div>
    <div class="stat-pill">
      <span class="stat-dot resolved"></span>
      <span>${t("statsResolvedLabel")}: ${resolvedCount}</span>
    </div>
    <div class="stat-pill">
      <span>${t("statsTotalLabel")}: ${total}</span>
    </div>
  `;
}

// Render feed
function renderReports() {
  const feedList = document.getElementById("feedList");
  const emptyState = document.getElementById("emptyState");
  const statusFilter = document.getElementById("statusFilter");
  const sortOrder = document.getElementById("sortOrder");

  if (!feedList || !emptyState || !statusFilter || !sortOrder) return;

  const statusValue = statusFilter.value;
  const sortValue = sortOrder.value;

  let filtered = reports.slice();

  if (statusValue !== "all") {
    filtered = filtered.filter((r) => r.status === statusValue);
  }

  filtered.sort((a, b) => {
    if (sortValue === "oldest") {
      return new Date(a.createdAt) - new Date(b.createdAt);
    }
    return new Date(b.createdAt) - new Date(a.createdAt);
  });

  feedList.innerHTML = "";

  if (filtered.length === 0) {
    emptyState.style.display = "block";
    emptyState.textContent = t("emptyState");
    return;
  }

  emptyState.style.display = "none";

  for (const report of filtered) {
    const card = document.createElement("article");
    card.className = "feed-card";
    card.dataset.id = report.id;

    const statusLabel =
      report.status === "resolved"
        ? t("statusResolved")
        : report.status === "in_progress"
        ? t("statusInProgress")
        : t("statusOpen");

    const statusClass =
      report.status === "resolved"
        ? "status-resolved"
        : report.status === "in_progress"
        ? "status-in-progress"
        : "status-open";

    const priorityClass =
      report.priority === "High"
        ? "priority-high"
        : report.priority === "Low"
        ? "priority-low"
        : "priority-medium";

    const photoAttachment = report.attachments?.photo;
    const videoAttachment = report.attachments?.video;

    const photoHtml =
      photoAttachment && photoAttachment.dataUrl
        ? `<img class="feed-photo" src="${photoAttachment.dataUrl}" alt="${photoAttachment.name || "Photo"}" />`
        : "";

    const videoHtml =
      videoAttachment && videoAttachment.dataUrl
        ? `<video class="feed-video" src="${videoAttachment.dataUrl}" controls></video>`
        : "";

    const mediaHtml =
      photoHtml || videoHtml
        ? `<div class="feed-media">
             ${photoHtml}
             ${videoHtml}
           </div>`
        : "";

    card.innerHTML = `
      <div>
        <div class="feed-title">${report.title}</div>
        <div class="feed-meta">
          <span class="pill">${report.category}</span>
          <span class="pill ${priorityClass}">
            ${t("cardPriorityLabel")} ${report.priority}
          </span>
          <span class="pill">${report.location}</span>
          ${
            report.phone
              ? `<span class="pill">📞 ${report.phone}</span>`
              : ""
          }
          <span class="pill ${statusClass}">${statusLabel}</span>
        </div>
      </div>
      <div class="feed-actions">
        <button class="btn btn-outline small" data-action="edit-report">
          ${t("btnEditReport")}
        </button>
        ${
          report.status !== "resolved"
            ? `<button class="btn btn-outline small" data-action="mark-in-progress">
                 ${t("btnMarkInProgress")}
               </button>
               <button class="btn primary small" data-action="mark-resolved">
                 ${t("btnMarkResolved")}
               </button>`
            : `<button class="btn btn-outline small" data-action="reopen">
                 ${t("btnReopen")}
               </button>`
        }
      </div>
      <div class="feed-description">${report.description}</div>
      ${mediaHtml}
      <div class="feed-footer">
        <span class="timestamp">
          ${t("labelReported")} ${formatTime(report.createdAt)}
        </span>
        ${
          report.updatedAt && report.updatedAt !== report.createdAt
            ? `<span class="timestamp">
                 ${t("labelUpdated")} ${formatTime(report.updatedAt)}
               </span>`
            : ""
        }
      </div>
    `;

    feedList.appendChild(card);
  }
}

// Status update
function updateReportStatus(id, status) {
  const idx = reports.findIndex((r) => r.id === id);
  if (idx === -1) return;

  reports[idx].status = status;
  reports[idx].updatedAt = new Date().toISOString();
  saveReports();
  updateStats();
  renderReports();
}

// Events
function setupEventListeners() {
  const form = document.getElementById("reportForm");
  const feedList = document.getElementById("feedList");
  const statusFilter = document.getElementById("statusFilter");
  const sortOrder = document.getElementById("sortOrder");
  const successOkButton = document.getElementById("successOkButton");
  const clearFeedButton = document.getElementById("clearFeedButton");
  const editForm = document.getElementById("editForm");
  const editCancelButton = document.getElementById("editCancelButton");

  if (form) {
    form.addEventListener("submit", async (event) => {
      event.preventDefault();
      const report = await createReportFromForm(form);
      if (!report) return;

      reports.unshift(report);
      saveReports();
      updateStats();
      renderReports();
      form.reset();
      showSuccessOverlay();
    });
  }

  if (feedList) {
    feedList.addEventListener("click", (event) => {
      const target = event.target;
      if (!(target instanceof HTMLElement)) return;

      const action = target.dataset.action;
      if (!action) return;

      const card = target.closest(".feed-card");
      if (!card) return;

      const id = card.dataset.id;
      if (!id) return;

      if (action === "mark-in-progress") {
        updateReportStatus(id, "in_progress");
      } else if (action === "mark-resolved") {
        updateReportStatus(id, "resolved");
      } else if (action === "reopen") {
        updateReportStatus(id, "open");
      } else if (action === "edit-report") {
        const report = reports.find((r) => r.id === id);
        if (report) showEditOverlay(report);
      }
    });
  }

  if (statusFilter) {
    statusFilter.addEventListener("change", () => {
      renderReports();
    });
  }

  if (sortOrder) {
    sortOrder.addEventListener("change", () => {
      renderReports();
    });
  }

  if (clearFeedButton) {
    clearFeedButton.addEventListener("click", () => {
      if (!confirm(t("confirmClearFeed"))) return;
      reports = [];
      saveReports();
      updateStats();
      renderReports();
    });
  }

  if (editForm) {
    editForm.addEventListener("submit", (event) => {
      event.preventDefault();
      if (!currentEditId) return;

      const idx = reports.findIndex((r) => r.id === currentEditId);
      if (idx === -1) return;

      const titleInput = document.getElementById("editIssueTitle");
      const categorySelect = document.getElementById("editIssueCategory");
      const prioritySelect = document.getElementById("editIssuePriority");
      const locationInput = document.getElementById("editIssueLocation");
      const phoneInput = document.getElementById("editMobileNumber");
      const descTextarea = document.getElementById("editIssueDescription");

      const title = titleInput ? titleInput.value.trim() : "";
      const category = categorySelect ? categorySelect.value.trim() : "";
      const priority = prioritySelect ? prioritySelect.value.trim() : "";
      const location = locationInput ? locationInput.value.trim() : "";
      const phone = phoneInput ? phoneInput.value.trim() : "";
      const description = descTextarea ? descTextarea.value.trim() : "";

      if (!title || !category || !priority || !location || !description || !phone) {
        alert(t("alertFillAll"));
        return;
      }

      const report = reports[idx];
      report.title = title;
      report.category = category;
      report.priority = priority;
      report.location = location;
      report.phone = phone;
      report.description = description;
      report.updatedAt = new Date().toISOString();

      saveReports();
      updateStats();
      renderReports();
      hideEditOverlay();
    });
  }

  if (editCancelButton) {
    editCancelButton.addEventListener("click", () => {
      hideEditOverlay();
    });
  }

  if (successOkButton) {
    successOkButton.addEventListener("click", () => {
      hideSuccessOverlay();
    });
  }
}

// Language: apply to static UI
function applyLanguage() {
  // Header
  const headerTitle = document.querySelector(".app-header h1");
  const headerSubtitle = document.querySelector(".app-header p");
  if (headerTitle) headerTitle.textContent = t("appTitle");
  if (headerSubtitle) headerSubtitle.textContent = t("appSubtitle");

  // Form title
  const formTitle = document.querySelector(".panel-form h2");
  if (formTitle) formTitle.textContent = t("formTitle");

  // Form labels/placeholders
  const issueTitleLabel = document.querySelector('label[for="issueTitle"]');
  if (issueTitleLabel) issueTitleLabel.textContent = t("labelIssueTitle");
  const issueTitleInput = document.getElementById("issueTitle");
  if (issueTitleInput)
    issueTitleInput.placeholder = t("placeholderIssueTitle");

  const categoryLabel = document.querySelector('label[for="issueCategory"]');
  if (categoryLabel) categoryLabel.textContent = t("labelCategory");
  const catSelect = document.getElementById("issueCategory");
  if (catSelect) {
    const optEmpty = catSelect.querySelector('option[value=""]');
    const optRoads = catSelect.querySelector('option[value="Roads"]');
    const optStreetLights = catSelect.querySelector(
      'option[value="Street Lights"]'
    );
    const optWaste = catSelect.querySelector(
      'option[value="Waste Management"]'
    );
    const optWater = catSelect.querySelector('option[value="Water Supply"]');
    const optParks = catSelect.querySelector(
      'option[value="Parks & Public Spaces"]'
    );
    const optOther = catSelect.querySelector('option[value="Other"]');

    if (optEmpty) optEmpty.textContent = t("optionSelectCategory");
    if (optRoads) optRoads.textContent = t("optionRoads");
    if (optStreetLights) optStreetLights.textContent = t("optionStreetLights");
    if (optWaste) optWaste.textContent = t("optionWasteManagement");
    if (optWater) optWater.textContent = t("optionWaterSupply");
    if (optParks) optParks.textContent = t("optionParks");
    if (optOther) optOther.textContent = t("optionOther");
  }

  const priorityLabel = document.querySelector('label[for="issuePriority"]');
  if (priorityLabel) priorityLabel.textContent = t("labelPriority");
  const prioritySelect = document.getElementById("issuePriority");
  if (prioritySelect) {
    const low = prioritySelect.querySelector('option[value="Low"]');
    const med = prioritySelect.querySelector('option[value="Medium"]');
    const high = prioritySelect.querySelector('option[value="High"]');
    if (low) low.textContent = t("optionPriorityLow");
    if (med) med.textContent = t("optionPriorityMedium");
    if (high) high.textContent = t("optionPriorityHigh");
  }

  const locationLabel = document.querySelector('label[for="issueLocation"]');
  if (locationLabel) locationLabel.textContent = t("labelLocation");
  const locationInput = document.getElementById("issueLocation");
  if (locationInput)
    locationInput.placeholder = t("placeholderLocation");

  const mobileLabel = document.querySelector('label[for="mobileNumber"]');
  if (mobileLabel) mobileLabel.textContent = t("labelMobile");
  const mobileInput = document.getElementById("mobileNumber");
  if (mobileInput) mobileInput.placeholder = t("placeholderMobile");

  const photoLabel = document.querySelector('label[for="photoFile"]');
  if (photoLabel) photoLabel.textContent = t("labelPhoto");
  const videoLabel = document.querySelector('label[for="videoFile"]');
  if (videoLabel) videoLabel.textContent = t("labelVideo");

  const descLabel = document.querySelector('label[for="issueDescription"]');
  if (descLabel) descLabel.textContent = t("labelDescription");
  const descTextarea = document.getElementById("issueDescription");
  if (descTextarea)
    descTextarea.placeholder = t("placeholderDescription");

  // Form buttons
  const submitBtn = document.querySelector(
    '#reportForm button[type="submit"]'
  );
  const resetBtn = document.querySelector('#reportForm button[type="reset"]');
  if (submitBtn) submitBtn.textContent = t("btnSubmit");
  if (resetBtn) resetBtn.textContent = t("btnClear");

  // Feed header
  const feedTitle = document.querySelector(".panel-feed h2");
  const feedSubtitle = document.querySelector(".panel-feed p");
  if (feedTitle) feedTitle.textContent = t("feedTitle");
  if (feedSubtitle) feedSubtitle.textContent = t("feedSubtitle");

  // Filters
  const statusFilter = document.getElementById("statusFilter");
  if (statusFilter) {
    const optAll = statusFilter.querySelector('option[value="all"]');
    const optOpen = statusFilter.querySelector('option[value="open"]');
    const optInProgress = statusFilter.querySelector(
      'option[value="in_progress"]'
    );
    const optResolved = statusFilter.querySelector(
      'option[value="resolved"]'
    );
    if (optAll) optAll.textContent = t("filterAllStatuses");
    if (optOpen) optOpen.textContent = t("filterOpenOnly");
    if (optInProgress) optInProgress.textContent = t("filterInProgress");
    if (optResolved) optResolved.textContent = t("filterResolved");
  }

  const sortOrder = document.getElementById("sortOrder");
  if (sortOrder) {
    const newest = sortOrder.querySelector('option[value="newest"]');
    const oldest = sortOrder.querySelector('option[value="oldest"]');
    if (newest) newest.textContent = t("sortNewest");
    if (oldest) oldest.textContent = t("sortOldest");
  }

  const clearFeedButton = document.getElementById("clearFeedButton");
  if (clearFeedButton) clearFeedButton.textContent = t("btnClearFeed");

  // Footer
  const footerText = document.querySelector(".app-footer p");
  if (footerText) footerText.textContent = t("footer");

  // Login overlay texts
  const loginOverlay = document.getElementById("loginOverlay");
  if (loginOverlay) {
    const loginTitle = loginOverlay.querySelector(".login-title");
    const loginSubtitle = loginOverlay.querySelector(".login-subtitle");
    const loginUsernameLabel = loginOverlay.querySelector(
      ".login-username-label"
    );
    const loginPasswordLabel = loginOverlay.querySelector(
      ".login-password-label"
    );
    const loginHint = loginOverlay.querySelector(".login-hint");
    const loginButton = loginOverlay.querySelector(".login-button");
    const loginUserInput = document.getElementById("loginUsername");
    const loginPassInput = document.getElementById("loginPassword");

    if (loginTitle) loginTitle.textContent = t("loginTitle");
    if (loginSubtitle) loginSubtitle.textContent = t("loginSubtitle");
    if (loginUsernameLabel)
      loginUsernameLabel.textContent = t("loginUsernameLabel");
    if (loginPasswordLabel)
      loginPasswordLabel.textContent = t("loginPasswordLabel");
    if (loginHint) loginHint.textContent = t("loginHint");
    if (loginButton) loginButton.textContent = t("loginButton");
    if (loginUserInput)
      loginUserInput.placeholder = t("loginUsernamePlaceholder");
    if (loginPassInput)
      loginPassInput.placeholder = t("loginPasswordPlaceholder");
  }

  // Success popup texts
  const successOverlay = document.getElementById("successOverlay");
  if (successOverlay) {
    const successTitle = successOverlay.querySelector(".success-title");
    const successSubtitle = successOverlay.querySelector(".success-subtitle");
    const successOkButton = document.getElementById("successOkButton");

    if (successTitle) successTitle.textContent = t("successTitle");
    if (successSubtitle) successSubtitle.textContent = t("successSubtitle");
    if (successOkButton) successOkButton.textContent = t("successOkLabel");
  }

  // Edit popup texts
  const editOverlay = document.getElementById("editOverlay");
  if (editOverlay) {
    const editTitle = editOverlay.querySelector(".edit-title");
    const editSaveButton = document.getElementById("editSaveButton");
    const editCancelButton = document.getElementById("editCancelButton");

    if (editTitle) editTitle.textContent = t("editTitle");
    if (editSaveButton) editSaveButton.textContent = t("editSave");
    if (editCancelButton) editCancelButton.textContent = t("editCancel");

    const editTitleLabel = editOverlay.querySelector(
      'label[for="editIssueTitle"]'
    );
    const editCategoryLabel = editOverlay.querySelector(
      'label[for="editIssueCategory"]'
    );
    const editPriorityLabel = editOverlay.querySelector(
      'label[for="editIssuePriority"]'
    );
    const editLocationLabel = editOverlay.querySelector(
      'label[for="editIssueLocation"]'
    );
    const editMobileLabel = editOverlay.querySelector(
      'label[for="editMobileNumber"]'
    );
    const editDescLabel = editOverlay.querySelector(
      'label[for="editIssueDescription"]'
    );

    if (editTitleLabel) editTitleLabel.textContent = t("labelIssueTitle");
    if (editCategoryLabel) editCategoryLabel.textContent = t("labelCategory");
    if (editPriorityLabel) editPriorityLabel.textContent = t("labelPriority");
    if (editLocationLabel) editLocationLabel.textContent = t("labelLocation");
    if (editMobileLabel) editMobileLabel.textContent = t("labelMobile");
    if (editDescLabel) editDescLabel.textContent = t("labelDescription");

    const editTitleInput = document.getElementById("editIssueTitle");
    const editLocationInput = document.getElementById("editIssueLocation");
    const editMobileInput = document.getElementById("editMobileNumber");
    const editDescTextarea = document.getElementById("editIssueDescription");

    if (editTitleInput)
      editTitleInput.placeholder = t("placeholderIssueTitle");
    if (editLocationInput)
      editLocationInput.placeholder = t("placeholderLocation");
    if (editMobileInput)
      editMobileInput.placeholder = t("placeholderMobile");
    if (editDescTextarea)
      editDescTextarea.placeholder = t("placeholderDescription");

    const editCatSelect = document.getElementById("editIssueCategory");
    if (editCatSelect) {
      const optEmpty = editCatSelect.querySelector('option[value=""]');
      const optRoads = editCatSelect.querySelector('option[value="Roads"]');
      const optStreetLights = editCatSelect.querySelector(
        'option[value="Street Lights"]'
      );
      const optWaste = editCatSelect.querySelector(
        'option[value="Waste Management"]'
      );
      const optWater = editCatSelect.querySelector(
        'option[value="Water Supply"]'
      );
      const optParks = editCatSelect.querySelector(
        'option[value="Parks & Public Spaces"]'
      );
      const optOther = editCatSelect.querySelector('option[value="Other"]');

      if (optEmpty) optEmpty.textContent = t("optionSelectCategory");
      if (optRoads) optRoads.textContent = t("optionRoads");
      if (optStreetLights) optStreetLights.textContent = t("optionStreetLights");
      if (optWaste) optWaste.textContent = t("optionWasteManagement");
      if (optWater) optWater.textContent = t("optionWaterSupply");
      if (optParks) optParks.textContent = t("optionParks");
      if (optOther) optOther.textContent = t("optionOther");
    }

    const editPrioritySelect = document.getElementById("editIssuePriority");
    if (editPrioritySelect) {
      const low = editPrioritySelect.querySelector('option[value="Low"]');
      const med = editPrioritySelect.querySelector('option[value="Medium"]');
      const high = editPrioritySelect.querySelector('option[value="High"]');
      if (low) low.textContent = t("optionPriorityLow");
      if (med) med.textContent = t("optionPriorityMedium");
      if (high) high.textContent = t("optionPriorityHigh");
    }
  }
}

// Language switcher
function setupLanguageSwitcher() {
  const buttons = document.querySelectorAll(".lang-btn");
  if (!buttons.length) return;

  buttons.forEach((btn) => {
    const lang = btn.dataset.lang;
    btn.classList.toggle("active", lang === currentLang);

    btn.addEventListener("click", () => {
      if (!lang || lang === currentLang) return;
      currentLang = lang;
      localStorage.setItem(LANG_KEY, lang);

      buttons.forEach((b) =>
        b.classList.toggle("active", b === btn)
      );

      applyLanguage();
      updateStats();
      renderReports();
    });
  });
}

// Login
function setupLogin() {
  const overlay = document.getElementById("loginOverlay");
  const form = document.getElementById("loginForm");
  if (!overlay || !form) return;

  const loggedIn = localStorage.getItem(LOGIN_KEY) === "1";
  if (!loggedIn) {
    overlay.style.display = "flex";
  }

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const usernameEl = document.getElementById("loginUsername");
    const passwordEl = document.getElementById("loginPassword");
    const username = usernameEl ? usernameEl.value.trim() : "";
    const password = passwordEl ? passwordEl.value.trim() : "";

    if (!username || !password) {
      alert(t("alertLoginRequired"));
      return;
    }

    // Demo: accept any credentials
    localStorage.setItem(LOGIN_KEY, "1");
    overlay.style.display = "none";
  });
}

// Init
document.addEventListener("DOMContentLoaded", () => {
  loadReports();
  setupEventListeners();
  setupLogin();
  setupLanguageSwitcher();
  applyLanguage();
  updateStats();
  renderReports();
});

