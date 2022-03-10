<?php
defined('MOODLE_INTERNAL') || die();
function local_generatorbadge_extend_navigation(global_navigation $navigation)
{

    if (!has_capability('moodle/site:config', context_system::instance())) {
        return;
    }

    $main_node = $navigation->add(get_string('pluginname', 'local_generatorbadge'), '/local/generatorbadge/local_generatorbadge.php');
    // $main_node = $navigation->add(get_string('pluginname', 'local_generatorbadge'), '/blocks/badgegenerator/block_badgegenerator.php');
    $main_node->nodetype = 1;
    $main_node->collapse = false;
    $main_node->forceopen = true;
    $main_node->isexpandable = false;
    $main_node->showinflatnavigation = true;
}

