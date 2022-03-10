<?php
// This file is part of Moodle - http://moodle.org/
//
// Moodle is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
//
// Moodle is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.
//
// You should have received a copy of the GNU General Public License
// along with Moodle.  If not, see <http://www.gnu.org/licenses/>.

/**
 * Form for editing HTML block instances.
 *
 * @package   block_badgegenerator
 * @copyright 1999 onwards Martin Dougiamas (http://dougiamas.com)
 * @license   http://www.gnu.org/copyleft/gpl.html GNU GPL v3 or later
 */

require_once(__DIR__ . '/../../config.php');
require_once($CFG->dirroot . '/blocks/moodleblock.class.php');

class block_badgegenerator extends block_base
{
    function init()
    {
        $this->title = get_string('pluginname', 'block_badgegenerator');
    }

    public function instance_allow_multiple()
    {
        return true;
    }

    public function hide_header()
    {
        return false;
    }

//    public function applicable_formats()
//    {
//        return array(
//            'all' => true,
//            'site-index' => true,
//            'course-view' => true,
//            'course-view-social' => false,
//            'mod' => false,
//            'mod-quiz' => false
//        );
//    }

    function has_config()
    {
        return true;
    }

    function is_empty()
    {
        $this->get_content();
        return (empty($this->content->text) && empty($this->content->footer));
    }

    function get_content()
    {
        global $OUTPUT;


        $templatecontext = [
            'texttodisplay' => 'Gib den Kurstitel ein:',
            'imageiconone' => $OUTPUT->image_url('icon01', 'block_badgegenerator'),
            'imageicontwo' => $OUTPUT->image_url('icon02', 'block_badgegenerator'),
            'imageiconthree' => $OUTPUT->image_url('icon03', 'block_badgegenerator'),
            'imageiconfour' => $OUTPUT->image_url('icon04', 'block_badgegenerator')
        ];

        $this->content = new stdClass;
        // $this->content->text .= $OUTPUT->render_from_template('block_badgegenerator/badgegenerator', $templatecontext);
        $this->content->text .= $OUTPUT->render_from_template('local_generatorbadge/badgegen', $templatecontext);

        //  $this->page->requires->js_call_amd('block_badgegenerator/badgegen', 'init');
        $this->page->requires->js_call_amd('local_generatorbadge/badgeapp', 'init');
        return $this->content;
    }

}