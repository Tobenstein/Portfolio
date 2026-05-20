from pathlib import Path
from textwrap import wrap

from reportlab.lib import colors
from reportlab.lib.pagesizes import letter
from reportlab.pdfgen import canvas
from pypdf import PdfReader

try:
    from pdf2image import convert_from_path
except Exception:
    convert_from_path = None


ROOT = Path(__file__).resolve().parents[1]
PUBLIC_PDF = ROOT / "public" / "rob-perry-cv.pdf"
DIST_PDF = ROOT / "dist" / "rob-perry-cv.pdf"
PROFILE_PHOTO = ROOT / "public" / "profile.jpg"
PREVIEW_DIR = ROOT / "artifacts" / "cv-preview"

PAGE_W, PAGE_H = letter
MARGIN = 34
SIDEBAR_W = 174
GUTTER = 24
CONTENT_X = MARGIN + SIDEBAR_W + GUTTER
CONTENT_W = PAGE_W - CONTENT_X - MARGIN
ROLE_TITLE_SIZE = 10.2
ROLE_EMPLOYER_SIZE = 8.6
ROLE_BODY_SIZE = 8.0
DATE_CHIP_W = 76
ROLE_TEXT_X_OFFSET = 88
CARD_GAP = 30

INK = colors.HexColor("#F7F8FB")
MUTED = colors.HexColor("#AAB4C7")
SIDEBAR = colors.HexColor("#111722")
PAPER = colors.HexColor("#F7F4EE")
BODY = colors.HexColor("#222733")
BODY_MUTED = colors.HexColor("#6B7280")
ACCENT = colors.HexColor("#9FC5FF")
GOLD = colors.HexColor("#D8B37A")
LINE = colors.HexColor("#D8D1C5")
CARD = colors.HexColor("#FFFDF8")


CONTACT = [
    "+420 734 886 938",
    "robperryinc@protonmail.com",
    "robperry.eu",
    "Prague, CZ",
    "Available worldwide",
]

PROFILE = (
    "UX leader with 9+ years designing products for healthcare, learning, workforce integration, "
    "gaming, and international markets. I turn messy systems into clear, humane product experiences "
    "that people can trust when the stakes are high."
)

HIGHLIGHTS = [
    "25+ unique products developed across multiple industries.",
    "1,000+ medical professionals supported through redesigned education platforms.",
    "12,000+ newcomers supported through workforce integration pathways.",
    "Clinical examination time reduced from about 6 minutes to about 2.",
]

SKILLS = [
    "End-to-end UX and product design",
    "Information architecture",
    "Design systems",
    "Interaction design",
    "User research and usability testing",
    "Journey mapping",
    "Insight synthesis",
    "Figma, Framer, Webflow",
    "Agile delivery and product strategy",
]

LANGUAGES = [
    "English - C2, native",
    "Dutch - B1",
    "French - B1",
    "German / Yiddish - A1",
]

EDUCATION = [
    "Master of Arts",
    "Bachelor of Arts",
    "Professional Certificates:",
    "Google UX Design",
    "IBM DevOps & Software Engineering",
    "IBM Front-End Software Development",
]

ROLES = [
    {
        "date": "2026",
        "title": "Senior Product Designer (UX & Web)",
        "employer": "Soul Atlas | Dublin, Ireland",
        "bullets": [
            "Translate high-level creative direction into scalable, production-ready web and app experiences aligned with brand vision and user needs.",
            "Partner with creative, product, and engineering teams to deliver cohesive digital products from concept through launch.",
            "Design intuitive user flows, wireframes, and high-fidelity interfaces that improve usability, engagement, and visual consistency.",
            "Apply and evolve design systems and style guides to maintain quality across platforms.",
        ],
    },
    {
        "date": "2023 - 2025",
        "title": "Senior Product Designer (UX)",
        "employer": "Threshold Training Associates | Prague, CZ",
        "bullets": [
            "Led end-to-end design of scalable digital learning products across enterprise sectors including banking and energy.",
            "Turned complex workflows into intuitive user journeys, reducing task completion time by roughly 25%.",
            "Partnered with engineering and product in agile sprints to ship features faster and improve delivery velocity.",
            "Established reusable design patterns that improved consistency across products.",
        ],
    },
    {
        "date": "2018 - 2024",
        "title": "Product Designer (UX), Medical Education Platforms",
        "employer": "Dalhousie University, Dept. of Medicine | Halifax, Canada",
        "bullets": [
            "Redesigned core education platforms used by 1,000+ medical professionals, improving usability scores by roughly 35%.",
            "Led user research with clinicians and translated findings into product decisions and roadmap priorities.",
            "Re-architected information systems to support complex learning workflows and increase completion rates.",
            "Helped stakeholders adopt user-centered design as part of broader digital transformation work.",
        ],
    },
    {
        "date": "2022 - 2023",
        "title": "Lead Product Designer (UX), Newcomer Integration Platform",
        "employer": "Immigration Services Association of Nova Scotia | Canada",
        "bullets": [
            "Led UX for a national digital platform supporting workforce integration across Canada.",
            "Designed end-to-end user journeys that improved job-readiness outcomes for 12,000+ users.",
            "Translated complex government and employment systems into accessible product experiences.",
            "Collaborated with cross-functional teams to deliver scalable, user-centered solutions.",
        ],
    },
    {
        "date": "2018 - 2022",
        "title": "Lead UX Designer (MedTech / EdTech Products)",
        "employer": "Tobenstein Technologies | East Asia / Canada",
        "bullets": [
            "Directed UX for multiple digital products across healthcare and education markets.",
            "Reduced usability friction by roughly 40% through iterative prototyping and testing.",
            "Built scalable design frameworks to support multi-product ecosystems.",
            "Delivered data-informed design improvements that increased user satisfaction and retention.",
        ],
    },
    {
        "date": "2017 - 2018",
        "title": "UX Designer",
        "employer": "KNOX Academy | South Korea",
        "bullets": [
            "Designed responsive product experiences for an eLearning platform used by 1,000+ users.",
            "Improved navigation and information architecture, increasing user engagement.",
            "Conducted usability testing to inform product iterations.",
        ],
    },
    {
        "date": "2010 - 2014",
        "title": "Operations Lead, Emergency Response and Communications",
        "employer": "Paladin Security & Emergency Response | Canada",
        "bullets": [
            "Led real-time emergency response operations across a major metropolitan hospital network.",
            "Managed incident communications and decision-making systems in high-pressure, time-critical environments.",
            "Applied crisis intervention principles to de-escalate complex situations and strengthen human-centered thinking under stress.",
            "Designed and refined operational protocols, improving consistency and response effectiveness across shifts.",
        ],
    },
]


def line_height(size, leading=1.2):
    return size * leading


def split_text(text, max_chars):
    return wrap(text, max_chars, break_long_words=False, replace_whitespace=False)


def draw_wrapped(c, text, x, y, width, size=9.2, leading=1.28, color=BODY, font="Helvetica"):
    c.setFont(font, size)
    c.setFillColor(color)
    max_chars = max(18, int(width / (size * 0.49)))
    for line in split_text(text, max_chars):
        c.drawString(x, y, line)
        y -= line_height(size, leading)
    return y


def wrapped_height(text, width, size=9.2, leading=1.28):
    max_chars = max(18, int(width / (size * 0.49)))
    return len(split_text(text, max_chars)) * line_height(size, leading)


def draw_sidebar_section(c, title, items, y, compact=False):
    c.setFillColor(GOLD)
    c.setFont("Helvetica-Bold", 10.5)
    c.drawString(MARGIN, y, title.upper())
    y -= 14
    c.setFillColor(MUTED)
    size = 10.5 if compact else 11.4
    for item in items:
        y = draw_wrapped(c, item, MARGIN, y, SIDEBAR_W - 20, size=size, leading=1.06, color=MUTED)
        y -= 0.8
    return y - 5


def draw_profile_photo(c, x, y, size):
    if not PROFILE_PHOTO.exists():
        return
    c.saveState()
    path = c.beginPath()
    path.circle(x + size / 2, y + size / 2, size / 2)
    c.clipPath(path, stroke=False, fill=False)
    c.drawImage(
        str(PROFILE_PHOTO),
        x,
        y - size * 0.16,
        width=size,
        height=size * 1.33,
        preserveAspectRatio=True,
        mask="auto",
    )
    c.restoreState()
    c.setStrokeColor(colors.HexColor("#2B3B52"))
    c.setLineWidth(1.2)
    c.circle(x + size / 2, y + size / 2, size / 2, fill=False, stroke=True)


def draw_sidebar(c, page_num, show_reference=False):
    c.setFillColor(SIDEBAR)
    c.rect(0, 0, MARGIN + SIDEBAR_W, PAGE_H, fill=True, stroke=False)

    c.setFillColor(colors.HexColor("#1A2332"))
    c.circle(MARGIN + SIDEBAR_W - 8, PAGE_H - 88, 74, fill=True, stroke=False)
    c.setFillColor(colors.HexColor("#202B3C"))
    c.circle(MARGIN + 28, 82, 48, fill=True, stroke=False)

    photo_size = 141
    draw_profile_photo(c, MARGIN, PAGE_H - 180, photo_size)

    y = PAGE_H - 202
    c.setFont("Helvetica-Bold", 28)
    c.setFillColor(INK)
    c.drawString(MARGIN, y, "Rob Perry")
    y -= 17
    c.setFont("Helvetica-Bold", 9.8)
    c.setFillColor(ACCENT)
    c.drawString(MARGIN, y, "SENIOR UX DIRECTOR")
    y -= 13
    c.drawString(MARGIN, y, "& PRODUCT DESIGNER")
    y -= 22

    y = draw_sidebar_section(c, "Contact", CONTACT, y)
    y = draw_sidebar_section(c, "Core Skills", SKILLS, y, compact=True)
    y = draw_sidebar_section(c, "Languages", LANGUAGES, y, compact=True)
    y = draw_sidebar_section(c, "Education", EDUCATION, y, compact=True)

    if show_reference:
        c.setFillColor(GOLD)
        c.setFont("Helvetica-Bold", 10.5)
        c.drawString(MARGIN, 58, "REFERENCE")
        c.setFillColor(MUTED)
        c.setFont("Helvetica", 10.5)
        c.drawString(MARGIN, 44, "Available upon request.")

    c.setFillColor(MUTED)
    c.setFont("Helvetica", 9.8)
    c.drawString(MARGIN, 26, f"robperry.eu  /  CV page {page_num}")


def draw_page_header(c, title, subtitle):
    c.setFillColor(PAPER)
    c.rect(MARGIN + SIDEBAR_W, 0, PAGE_W - (MARGIN + SIDEBAR_W), PAGE_H, fill=True, stroke=False)

    c.setFillColor(colors.HexColor("#EEE6D8"))
    c.circle(PAGE_W - 70, PAGE_H - 80, 94, fill=True, stroke=False)
    c.setFillColor(colors.HexColor("#E4EDF9"))
    c.circle(CONTENT_X + 30, PAGE_H - 28, 46, fill=True, stroke=False)

    y = PAGE_H - 48
    c.setFillColor(GOLD)
    c.setFont("Helvetica-Bold", 7.8)
    c.drawString(CONTENT_X, y, "CURRICULUM VITAE")
    y -= 12
    c.setFillColor(BODY)
    y = draw_wrapped(
        c,
        "Product design for complex, high-stakes systems.",
        CONTENT_X,
        y,
        CONTENT_W - 10,
        size=13.5,
        leading=1.04,
        color=BODY,
        font="Helvetica-Bold",
    )
    y -= 2
    y = draw_wrapped(c, subtitle, CONTENT_X, y, CONTENT_W - 10, size=8.45, leading=1.12, color=BODY_MUTED)
    y -= 7
    c.setStrokeColor(LINE)
    c.setLineWidth(0.8)
    c.line(CONTENT_X, y, PAGE_W - MARGIN, y)
    return y - 14


def draw_chip(c, x, y, text, fill, text_color):
    c.setFillColor(fill)
    c.roundRect(x, y - 13, DATE_CHIP_W, 18, 5, fill=True, stroke=False)
    c.setFillColor(text_color)
    c.setFont("Helvetica-Bold", 7)
    c.drawCentredString(x + DATE_CHIP_W / 2, y - 7, text.upper())


def draw_section_label(c, text, y):
    c.setFillColor(GOLD)
    c.setFont("Helvetica-Bold", 7.8)
    c.drawString(CONTENT_X, y, text.upper())
    c.setStrokeColor(LINE)
    c.setLineWidth(0.6)
    c.line(CONTENT_X + 92, y + 3, PAGE_W - MARGIN, y + 3)
    return y - 15


def role_content_height(role):
    title_w = CONTENT_W - ROLE_TEXT_X_OFFSET
    height = 16
    height += wrapped_height(role["title"], title_w, size=ROLE_TITLE_SIZE, leading=1.08)
    height += wrapped_height(role["employer"], title_w, size=ROLE_EMPLOYER_SIZE, leading=1.1) + 10
    for bullet in role["bullets"]:
        height += wrapped_height(bullet, CONTENT_W - 18, size=ROLE_BODY_SIZE, leading=1.1) + 2.2
    return height


def estimate_role_height(role):
    return role_content_height(role) + CARD_GAP


def draw_role(c, role, y):
    role_h = role_content_height(role)
    card_x = CONTENT_X - 10
    card_y = y - role_h + 8
    card_w = CONTENT_W + 20

    c.setFillColor(colors.Color(0, 0, 0, alpha=0.045))
    c.roundRect(card_x + 2, card_y - 2, card_w, role_h, 8, fill=True, stroke=False)
    c.setFillColor(CARD)
    c.roundRect(card_x, card_y, card_w, role_h, 8, fill=True, stroke=False)
    c.setStrokeColor(colors.HexColor("#C9BFAA"))
    c.setLineWidth(1.05)
    c.roundRect(card_x, card_y, card_w, role_h, 8, fill=False, stroke=True)

    c.setFillColor(colors.HexColor("#D8B37A"))
    c.rect(card_x, card_y + 8, 3, role_h - 16, fill=True, stroke=False)

    draw_chip(c, CONTENT_X, y, role["date"], colors.HexColor("#E9F1FF"), colors.HexColor("#2B4D78"))
    title_x = CONTENT_X + ROLE_TEXT_X_OFFSET
    title_w = CONTENT_W - ROLE_TEXT_X_OFFSET
    y = draw_wrapped(
        c,
        role["title"],
        title_x,
        y - 3,
        title_w,
        size=ROLE_TITLE_SIZE,
        leading=1.08,
        color=BODY,
        font="Helvetica-Bold",
    )
    y -= 2
    y = draw_wrapped(
        c,
        role["employer"],
        title_x,
        y,
        title_w,
        size=ROLE_EMPLOYER_SIZE,
        leading=1.1,
        color=BODY_MUTED,
        font="Helvetica-Bold",
    )
    y -= 9

    for bullet in role["bullets"]:
        c.setFillColor(GOLD)
        c.circle(CONTENT_X + 4, y + 2, 1.6, fill=True, stroke=False)
        y = draw_wrapped(c, bullet, CONTENT_X + 14, y, CONTENT_W - 18, size=ROLE_BODY_SIZE, leading=1.1, color=BODY)
        y -= 2.2
    return card_y - CARD_GAP


def new_page(
    c,
    page_num,
    title="Experience",
    subtitle="Product design, UX research, systems thinking, and calm execution under pressure.",
    show_reference=False,
):
    draw_sidebar(c, page_num, show_reference=show_reference)
    return draw_page_header(c, title, subtitle)


def build_pdf(path):
    c = canvas.Canvas(str(path), pagesize=letter)
    c.setTitle("Rob Perry CV")
    c.setAuthor("Rob Perry")

    page = 1
    y = new_page(c, page, title="Rob Perry", subtitle="Accessible, intuitive UX for healthcare, learning, public service, and product teams.")

    y = draw_section_label(c, "Profile", y)
    y = draw_wrapped(c, PROFILE, CONTENT_X, y, CONTENT_W, size=9.3, leading=1.3, color=BODY)
    y -= 6

    c.setFillColor(CARD)
    c.roundRect(CONTENT_X - 8, y - 54, CONTENT_W + 16, 58, 7, fill=True, stroke=False)
    c.setStrokeColor(colors.HexColor("#EEE7DC"))
    c.roundRect(CONTENT_X - 8, y - 54, CONTENT_W + 16, 58, 7, fill=False, stroke=True)
    c.setFillColor(GOLD)
    c.setFont("Helvetica-Bold", 7.8)
    c.drawString(CONTENT_X, y - 11, "SELECTED IMPACT")
    hx = CONTENT_X
    hy = y - 23
    for i, item in enumerate(HIGHLIGHTS):
        col_w = (CONTENT_W - 14) / 2
        x = hx + (i % 2) * (col_w + 14)
        yy = hy - (i // 2) * 17
        draw_wrapped(c, item, x, yy, col_w, size=7.6, leading=1.05, color=BODY)
    y -= 66

    y = draw_section_label(c, "Work Experience", y)
    for index, role in enumerate(ROLES):
        if index == 3 and page == 1:
            c.showPage()
            page += 1
            y = new_page(c, page, show_reference=True)
            y = draw_section_label(c, "Work Experience (cont.)", y)
        needed = estimate_role_height(role)
        if y - needed < 48:
            c.showPage()
            page += 1
            y = new_page(c, page, show_reference=True)
            y = draw_section_label(c, "Work Experience (cont.)", y)
        y = draw_role(c, role, y)

    c.save()


def render_preview(pdf_path):
    if convert_from_path is None:
        print("PDF preview skipped: pdf2image is unavailable.")
        return
    PREVIEW_DIR.mkdir(parents=True, exist_ok=True)
    for existing in PREVIEW_DIR.glob("page-*.png"):
        existing.unlink()
    try:
        pages = convert_from_path(str(pdf_path), dpi=150, fmt="png")
    except Exception as exc:
        print(f"PDF preview skipped: {exc}")
        return
    for idx, image in enumerate(pages, 1):
        image.save(PREVIEW_DIR / f"page-{idx}.png")


def audit_pdf_text(pdf_path):
    reader = PdfReader(str(pdf_path))
    print(f"pages: {len(reader.pages)}")
    for idx, page in enumerate(reader.pages, 1):
        text = page.extract_text() or ""
        print(f"page {idx}: {len(text)} text characters")


def main():
    PUBLIC_PDF.parent.mkdir(parents=True, exist_ok=True)
    build_pdf(PUBLIC_PDF)
    if DIST_PDF.parent.exists():
        DIST_PDF.write_bytes(PUBLIC_PDF.read_bytes())
    render_preview(PUBLIC_PDF)
    audit_pdf_text(PUBLIC_PDF)
    print(PUBLIC_PDF)
    print(PREVIEW_DIR)


if __name__ == "__main__":
    main()
