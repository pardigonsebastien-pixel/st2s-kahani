# -*- coding: utf-8 -*-
"""Construit le site statique st2s-kahani.fr (sans outillage OpenAI) dans le dossier de sortie.

Contenu source (dossier site-src) :
  contenu/entrainements/<route>.json   données de chaque entraînement (format exercises.json)
  contenu/s0-01.json                   données de l'entraînement C0-S01
  definitions/                         pages Définitions (copiées telles quelles)
  public/                              images, feuille de style, supports à télécharger
  js/                                  moteurs d'exercices
  accueil.json                         liste des entraînements affichés sur l'accueil

Usage : python build_site.py <dossier_sortie>
"""
import html, json, os, shutil, sys

SRC = os.path.dirname(os.path.abspath(__file__))
OUT = sys.argv[1] if len(sys.argv) > 1 else os.path.join(SRC, "..", "site")
E = html.escape

HEAD = """<!doctype html>
<html lang="fr">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>{title}</title>
<meta name="description" content="{desc}">
<link rel="icon" href="/favicon.svg">
<link rel="stylesheet" href="/site.css">
</head>
<body>
"""
FOOT = "</body>\n</html>\n"
HERO_SITE = ('<header class="hero hero--{kind}"><a class="hero-home" href="/" aria-label="Retour à l’accueil"></a>'
             '<img class="hero-watermark hero-watermark--left" src="/solidarite-filigrane.png" alt="" aria-hidden="true">'
             '<img class="hero-watermark hero-watermark--right" src="/solidarite-filigrane.png" alt="" aria-hidden="true">'
             '<h1>{h1}</h1><p>{p}</p></header>')
SIGNATURE = ('<div class="school-signature"><img class="school-logo" src="/logo-lpo-kahani.png" alt="Logo du Lycée polyvalent Gustave Eiffel de Kahani">'
             '<span>Lycée polyvalent Gustave Eiffel · Kahani</span></div>')


def nav(active):
    items = [("/", "Accueil"), ("/reperes-stss", "Repères STSS"), ("/definitions/", "Définitions")]
    return '<nav class="site-nav" aria-label="Navigation principale">' + "".join(
        f'<a{" class=\"site-nav__active\"" if href == active else ""} href="{href}">{label}</a>' for href, label in items) + "</nav>"


def write(path, content):
    full = os.path.join(OUT, path.strip("/"), "index.html") if not path.endswith(".html") else os.path.join(OUT, path.strip("/"))
    os.makedirs(os.path.dirname(full), exist_ok=True)
    open(full, "w", encoding="utf-8").write(content)


def accueil(cfg, reg):
    def links(items):
        return "".join(f'<a href="{E(i["route"])}">{E(i["id"])} · {E(i["label"])}</a>' for i in items)
    def rows(blocks):
        out = ""
        for b in blocks:
            out += '<div class="sequence-row"><p class="sequence-card__number">' + E(b["titre"]) + "</p>"
            if b.get("description"):
                out += '<p class="sequence-description">' + E(b["description"]) + "</p>"
            out += '<div class="resource-row">'
            if b.get("support"):
                out += '<div><strong>Support de cours</strong><span class="resource-pending">' + E(b["support"]) + "</span></div>"
            out += "<div><strong>Entraînements</strong>" + links(b["entrainements"]) + "</div></div></div>"
        return out
    body = (HERO_SITE.format(kind="site", h1="ST2S en pratique", p="S’entraîner pour mieux retenir le cours.") + SIGNATURE + nav("/") +
        '<section class="hub-intro"><p class="eyebrow">Ton espace ST2S</p><h2>Le cours compte.<br>L’entraînement fait la différence.</h2>'
        '<p class="hub-lead">Retrouve ici tes supports de cours et des entraînements courts pour mémoriser l’essentiel, préparer les évaluations et avancer sereinement vers le bac.</p>'
        '<div class="hub-points"><div><strong>15 min</strong><span>un entraînement court</span></div><div><strong>À ton rythme</strong><span>tu peux recommencer</span></div><div><strong>Sans compte</strong><span>aucune réponse enregistrée</span></div></div>'
        '<p class="hub-reassurance">Personne ne sait qui a fait ou non les exercices. Mais les faire régulièrement t’aidera vraiment à être plus à l’aise le jour des évaluations et de l’examen.</p></section>'
        '<section class="levels" aria-label="Cours et entraînements ST2S">'
        '<article class="level-panel"><header><p class="eyebrow">Classe de</p><h2>Première</h2></header>' + rows(cfg["premiere"]) + "</article>"
        '<article class="level-panel"><header><p class="eyebrow">Classe de</p><h2>Terminale</h2></header>' + rows(cfg["terminale"]) + "</article></section>"
        '<section class="reperes-callout"><p class="eyebrow">Révisions</p><h2>Définitions STSS</h2><p>Un jeu pour apprendre les définitions du cours, chapitre par chapitre, et le carnet des notions de l’année.</p><a class="primary-link" href="/definitions/">Réviser les définitions</a></section>'
        '<section class="reperes-callout"><p class="eyebrow">Bibliothèque annuelle</p><h2>Repères STSS</h2><p>Les supports à conserver et à réutiliser tout au long de l’année : méthode, consignes et fiches de référence.</p><a class="primary-link" href="/reperes-stss">Ouvrir la bibliothèque</a></section>'
        '<footer><strong>À retenir</strong><p>Les cours et entraînements disponibles apparaissent ici au fur et à mesure des séquences réalisées.</p><small>Ce site ne collecte ni nom, ni compte, ni réponse individuelle.</small></footer>')
    write("/", HEAD.format(title="ST2S en pratique", desc="Entraînements et révisions de STSS · Lycée Gustave Eiffel, Kahani.") + "<main>" + body + "</main>" + FOOT)


def reperes():
    body = (HERO_SITE.format(kind="compact", h1="Repères STSS", p="La bibliothèque des supports à garder et à réutiliser toute l’année.") + SIGNATURE + nav("/reperes-stss") +
        '<section class="reperes-intro"><p class="eyebrow">Bibliothèque annuelle</p><h2>Supports disponibles</h2><p>Télécharge les fiches utiles au cours de l’année et conserve-les dans ton classeur.</p></section>'
        '<section class="resource-library" aria-label="Supports à télécharger"><article class="resource-library__card"><img src="/boussole-logique-stss-verbes.png" alt="Aperçu de la boussole de la méthode STSS."><div><p class="eyebrow">Fiche méthode · Référence annuelle</p><h2>La boussole de la méthode STSS</h2><p>Les six étapes et les verbes de travail à utiliser de façon stable toute l’année.</p><a class="primary-link" href="/supports/fiche-annuelle-boussole-stss.pdf" download>Télécharger la fiche PDF</a></div></article></section>'
        '<section class="reperes-later"><p class="eyebrow">Prochainement</p><h2>La bibliothèque va s’enrichir</h2><div><article><h3>Lexique des consignes</h3><p>Les verbes attendus dans les questions et ce qu’ils demandent de faire.</p></article><article><h3>Fiches méthode</h3><p>Des rappels courts pour structurer un raisonnement, une réponse ou une analyse de document.</p></article></div></section>'
        '<footer><strong>À retenir</strong><p>Un déterminant est un facteur qui influence ou contribue à une situation : ce n’est pas une cause unique.</p><small>Garde cette page dans tes favoris : de nouveaux repères y seront ajoutés au fil de l’année.</small></footer>')
    write("/reperes-stss", HEAD.format(title="Repères STSS", desc="Les supports à garder toute l’année.") + "<main>" + body + "</main>" + FOOT)


def seance_c0_s01():
    body = (HERO_SITE.format(kind="site", h1="ST2S en pratique", p="S’entraîner pour mieux retenir le cours.") + SIGNATURE + nav("") +
        '<nav class="breadcrumb" aria-label="Fil d’Ariane"><a href="/">Tous les chapitres</a><span>›</span><span>C0-S01</span></nav>'
        '<article class="lesson-card"><p class="eyebrow">C0-S01 · Comprendre la logique STSS</p><h2>Avant l’entraînement</h2>'
        '<section><h3>Notions étudiées</h3><dl class="definition-list"><div><dt>Diagnostic en santé publique</dt><dd>Démarche qui permet de caractériser une situation problématique, d’identifier les facteurs qui influencent ou contribuent, puis de dégager les conséquences, enjeux et besoins.</dd></div><div><dt>Action publique</dt><dd>Réponse organisée à un problème collectif : elle mobilise des décisions, des objectifs, des actions, des moyens et des acteurs.</dd></div></dl><p class="source-note">La boussole annuelle précise les verbes de travail associés à chaque étape ; elle constitue le repère commun de l’année.</p></section>'
        '<section><h3>Capacités travaillées</h3><ul><li>Distinguer la phase diagnostic de la phase action.</li><li>Relier un besoin identifié à une réponse adaptée.</li><li>Justifier une action de prévention à partir d’éléments de diagnostic.</li></ul></section>'
        '<section><h3>Objectif pédagogique</h3><p>Comprendre qu’une action de prévention pertinente ne part pas d’une idée isolée : elle s’appuie sur un diagnostic pour choisir des objectifs, des publics, des acteurs et des modalités adaptés.</p></section>'
        '<a class="primary-link" href="/entrainement/s0-01">Commencer l’entraînement</a></article>')
    write("/sequences/s0/seance-01", HEAD.format(title="C0-S01 · ST2S en pratique", desc="Comprendre la logique STSS.") + "<main>" + body + "</main>" + FOOT)


def entrainement(route, data):
    body = ('<header class="hero hero--compact"><a class="hero-home" href="/" aria-label="Retour à l’accueil"></a><h1>ST2S en pratique</h1>'
            f'<p>Entraînement autonome · {E(data["id"])}</p></header><nav class="site-nav"><a href="/">Accueil</a></nav>'
            '<div class="exercise-list" id="exercices"></div>'
            '<noscript><p>Active JavaScript pour faire les exercices.</p></noscript>'
            '<footer><strong>À retenir</strong><p>Un diagnostic caractérise une situation, met plusieurs facteurs en relation et dégage des besoins avant de proposer une réponse.</p><small>Aucune réponse n’est enregistrée.</small></footer>')
    js = "<script>window.SEANCE = " + json.dumps(data, ensure_ascii=False).replace("</", "<\\/") + ";</script>\n<script src=\"/js/exercices.js\"></script>\n"
    write(route, HEAD.format(title=f"{data['id']} · Entraînement · ST2S en pratique", desc="Entraînement autonome de STSS.") + "<main>" + body + "</main>\n" + js + FOOT)


def entrainement_s0_01(d):
    body = (HERO_SITE.format(kind="compact", h1="ST2S en pratique", p="S’entraîner pour mieux retenir le cours.") + SIGNATURE +
        '<nav class="site-nav" aria-label="Navigation principale"><a href="/">Accueil</a><a href="/reperes-stss">Repères STSS</a></nav>'
        '<nav class="breadcrumb" aria-label="Fil d’Ariane"><a href="/">Tous les chapitres</a><span>›</span><a href="/sequences/s0/seance-01">C0-S01</a><span>›</span><span>Entraînement</span></nav>'
        '<section class="method"><p class="eyebrow">La boussole</p><div><strong>Diagnostic</strong><span>Caractériser · Identifier les facteurs qui influencent ou contribuent · Identifier conséquences, enjeux et besoins</span></div><div><strong>Action publique</strong><span>Repérer ou présenter · Décrire ou analyser · Évaluer puis ajuster</span></div></section>'
        '<div id="exercices" class="exercise-list"></div>'
        '<footer><strong>À retenir</strong><p>Une action de prévention pertinente part d’un diagnostic : elle répond à des besoins repérés, pour des publics et dans un territoire précis.</p><small>Ce site ne collecte ni nom, ni compte, ni réponse individuelle.</small></footer>')
    js = "<script>window.S001 = " + json.dumps(d, ensure_ascii=False).replace("</", "<\\/") + ";</script>\n<script src=\"/js/s0-01.js\"></script>\n"
    write("/entrainement/s0-01", HEAD.format(title="C0-S01 · Entraînement · ST2S en pratique", desc="Entraînement autonome C0-S01.") + "<main>" + body + "</main>\n" + js + FOOT)


def page_404():
    body = (HERO_SITE.format(kind="compact", h1="Page introuvable", p="Cette adresse n’existe pas ou plus.") + SIGNATURE + nav("") +
            '<section class="reperes-intro"><h2>Que faire ?</h2><p>Reviens à l’accueil pour retrouver les entraînements et les définitions.</p><a class="primary-link" href="/">Retour à l’accueil</a></section>')
    open(os.path.join(OUT, "404.html"), "w", encoding="utf-8").write(HEAD.format(title="Page introuvable · ST2S en pratique", desc="") + "<main>" + body + "</main>" + FOOT)


def main():
    if os.path.isdir(OUT):
        shutil.rmtree(OUT)
    shutil.copytree(os.path.join(SRC, "public"), OUT)
    shutil.copytree(os.path.join(SRC, "js"), os.path.join(OUT, "js"), ignore=shutil.ignore_patterns("*.json"))
    shutil.copytree(os.path.join(SRC, "definitions"), os.path.join(OUT, "definitions"))
    cfg = json.load(open(os.path.join(SRC, "accueil.json"), encoding="utf-8"))
    accueil(cfg, None); reperes(); seance_c0_s01(); page_404()
    entrainement_s0_01(json.load(open(os.path.join(SRC, "contenu", "s0-01.json"), encoding="utf-8")))
    folder = os.path.join(SRC, "contenu", "entrainements")
    n = 0
    for f in sorted(os.listdir(folder)):
        data = json.load(open(os.path.join(folder, f), encoding="utf-8"))
        route = data.get("route") or "/entrainement/" + f[:-5].replace("__", "/")
        entrainement(route, data); n += 1
    print("site construit dans", OUT, "·", n + 1, "entraînements")


main()
