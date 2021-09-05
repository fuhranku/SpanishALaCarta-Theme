<?php

/**
 * Bootstraps the theme
 * 
 * @package spanischalacarte
 */

namespace SPANISHALACARTE\Inc;

use SPANISHALACARTE\Inc\Traits\Singleton;

if (!defined('VALIDATION_ERRORS')) {
    define('VALIDATION_ERRORS', [
        "string" => [
            "en" => "The value needs to be a string",
            "es" => "Este campo debe ser texto",
            "de" => "Der Wert muss ein String sein",
        ],
        "required" => [
            "en" => "This value is required",
            "es" => "Este campo es requerido",
            "de" => "Dieser Wert ist erforderlich"
        ],
        "email" => [
            "en" => "The value needs to be a valid email",
            "es" => "Este campo debe ser un email válido",
            "de" => "Der Wert muss eine gültige E-Mail sein"
        ],
    ]);
}

class Validator
{
    use Singleton;

    public static function validate($data, $validators)
    {
        $errors = [];
        foreach ($data as $field => $value) {
            if (array_key_exists($field, $validators)) {
                $errors[$field] = Validator::get_errors($value, $validators[$field]);
            }
        }
        return array_filter($errors, 'array_filter');
    }

    private static function get_errors($value, $validator)
    {
        $field_error = [];
        foreach ($validator as $validation) {
            switch ($validation) {
                case "alpha":
                    $err_val = Validator::check_alpha($value);
                    $err_val != null ?  array_push($field_error, $err_val) : null;
                    break;
                case "required":
                    $err_val = Validator::check_required($value);
                    $err_val != null ?  array_push($field_error, $err_val) : null;
                    break;
                case "email":
                    $err_val = Validator::check_email($value);
                    $err_val != null ? array_push($field_error, $err_val) : null;
                    break;
            }
        }
        return $field_error;
    }

    private static function check_alpha($value)
    {
        $locale = "en";
        if (function_exists('pll_current_language')) {
            $locale = pll_current_language();
        }
        error_log($locale);
        return is_numeric($value) ? VALIDATION_ERRORS["string"][$locale] : null;
    }

    private static function check_required($value)
    {
        $locale = "en";
        if (function_exists('pll_current_language')) {
            $locale = pll_current_language();
        }
        return empty($value) ? VALIDATION_ERRORS["required"][$locale] : null;
    }

    private static function check_email($value)
    {
        $locale = "en";
        if (function_exists('pll_current_language')) {
            $locale = pll_current_language();
        }
        return !filter_var($value, FILTER_VALIDATE_EMAIL) ? VALIDATION_ERRORS["email"][$locale] : null;
    }
}
