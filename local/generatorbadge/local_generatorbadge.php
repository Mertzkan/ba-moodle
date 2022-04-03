<?php
require_once('../../config.php');
require_once 'lib.php';

global $PAGE, $OUTPUT;

$templatecontext = [
    'texttodisplay' => 'Gib den Kurstitel ein:',
    'imageiconone' => $OUTPUT->image_url('icon01', 'block_badgegenerator'),
    'imageicontwo' => $OUTPUT->image_url('icon02', 'block_badgegenerator'),
    'imageiconthree' => $OUTPUT->image_url('icon03', 'block_badgegenerator'),
    'imageiconfour' => $OUTPUT->image_url('icon04', 'block_badgegenerator')
];

$PAGE->set_context(context_system::instance());
// Set up the page.
$title = get_string('pluginname', 'local_generatorbadge');
$pagetitle = $title;
$url = new moodle_url("/local/generatorbadge/local_generatorbadge.php");
$PAGE->set_url($url);
$PAGE->set_title($title);
$PAGE->set_heading($title);
$PAGE->set_pagelayout('standard');
$PAGE->set_pagetype('my-index');
$PAGE->blocks->add_region('content');
$PAGE->requires->js_call_amd('local_generatorbadge/badgeapp','init');

echo $OUTPUT->header();
echo $OUTPUT->heading($pagetitle);
echo $OUTPUT->render_from_template('local_generatorbadge/badgegen', $templatecontext);
echo $OUTPUT->footer();


