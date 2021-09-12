<?php

/**
 * Currency switcher
 * @author Frank Ponte
 * @package spanischalacarte
 */
$classes = array_key_exists("classes", $args) ? $args["classes"] : "";
?>

<select class="currency-switcher <?php esc_attr_e($classes); ?>">
    <option value="usd">US Dollar ($)</option>
    <option value="usd">Euro (€)</option>
</select>