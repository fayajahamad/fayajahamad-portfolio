import test from "node:test";
import assert from "node:assert/strict";
import { getProject, projects } from "../lib/projects";
import { notes, getNote } from "../lib/notes";
import { site } from "../lib/site";

test("project URLs are unique and nonempty", () => {
  assert.equal(new Set(projects.map(p => p.slug)).size, projects.length);
  for (const project of projects) {
    assert.match(project.slug, /^[a-z0-9-]+$/);
    assert.ok(project.title.length > 5);
    assert.ok(project.summary.length > 20);
  }
});
test("every case study contains implementation, evidence and next steps", () => {
  for (const project of projects) {
    assert.ok(project.architecture.length >= 3, `${project.slug}: architecture`);
    assert.ok(project.verification.length >= 1, `${project.slug}: evidence`);
    assert.ok(project.nextSteps.length >= 2, `${project.slug}: next steps`);
    assert.ok(project.technologies.length >= 3, `${project.slug}: technologies`);
  }
});
test("known project resolver is deterministic", () => {
  assert.equal(getProject("zero-trust-enterprise")?.number, "01");
  assert.equal(getProject("does-not-exist"), undefined);
});
test("linked repositories use GitHub and HTTPS", () => {
  for (const project of projects.filter(p => p.repo)) {
    assert.match(project.repo, /^https:\/\/github\.com\/[\w-]+\/[\w.-]+$/);
  }
});
test("field note URLs and descriptions are unique", () => {
  assert.equal(new Set(notes.map(n => n.id)).size, notes.length);
  assert.ok(notes.length >= 3);
  assert.equal(getNote("missing-note"), undefined);
});
test("field notes have practical content", () => {
  for (const n of notes) {
    assert.ok(n.points.length >= 3);
    assert.ok(n.takeaway.length > 20);
  }
});
test("public GitHub URL points at configured identity", () => {
  assert.equal(new URL(site.github).hostname, "github.com");
  assert.equal(new URL(site.github).pathname, `/${site.githubUsername}`);
});
