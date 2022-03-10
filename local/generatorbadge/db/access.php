<?php
$capabilities = array(

    'local/generatorbadge:allowaccess' => array(
        'riskbitmask' => RISK_SPAM | RISK_CONFIG,
        'captype' => 'write',
        'contextlevel' => CONTEXT_SYSTEM,
        'archetypes' => array(
            'editingteacher' => CAP_ALLOW,
            'manager' => CAP_ALLOW,
            'coursecreator' => CAP_ALLOW
        ),
        'clonepermissionsfrom' => 'moodle/my:manageblocks'

    ),

    'local/generatorbadge:addinstance' => array(
        'riskbitmask' => RISK_SPAM | RISK_XSS,
        'captype' => 'write',
        'contextlevel' => CONTEXT_SYSTEM,
        'archetypes' => array(
            'manager' => CAP_ALLOW,
            'editingteacher' => CAP_ALLOW,
            'coursecreator' => CAP_ALLOW
        ),
        'clonepermissionsfrom' => 'moodle/site:manageblocks'

    )
);