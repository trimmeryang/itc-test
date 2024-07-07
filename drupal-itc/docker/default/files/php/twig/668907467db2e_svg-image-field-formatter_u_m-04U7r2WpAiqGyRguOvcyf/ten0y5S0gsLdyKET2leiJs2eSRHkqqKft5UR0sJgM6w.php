<?php

use Twig\Environment;
use Twig\Error\LoaderError;
use Twig\Error\RuntimeError;
use Twig\Extension\CoreExtension;
use Twig\Extension\SandboxExtension;
use Twig\Markup;
use Twig\Sandbox\SecurityError;
use Twig\Sandbox\SecurityNotAllowedTagError;
use Twig\Sandbox\SecurityNotAllowedFilterError;
use Twig\Sandbox\SecurityNotAllowedFunctionError;
use Twig\Source;
use Twig\Template;

/* modules/contrib/svg_image_field/templates/svg-image-field-formatter.html.twig */
class __TwigTemplate_040c55f1f2b93358a197ca8ab2e30400 extends Template
{
    private $source;
    private $macros = [];

    public function __construct(Environment $env)
    {
        parent::__construct($env);

        $this->source = $this->getSourceContext();

        $this->parent = false;

        $this->blocks = [
        ];
        $this->sandbox = $this->env->getExtension(SandboxExtension::class);
        $this->checkSecurity();
    }

    protected function doDisplay(array $context, array $blocks = [])
    {
        $macros = $this->macros;
        // line 1
        if (($context["link_url"] ?? null)) {
            // line 2
            yield "  <a href=\"";
            yield $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["link_url"] ?? null), 2, $this->source), "html", null, true);
            yield "\">
";
        }
        // line 4
        if (($context["inline"] ?? null)) {
            // line 5
            yield "  ";
            if (($context["twig_debug"] ?? null)) {
                // line 6
                yield "  <!-- INLINE SVG FILE PATH: '";
                yield $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->extensions['Drupal\Core\Template\TwigExtension']->getFileUrl($this->sandbox->ensureToStringAllowed(($context["uri"] ?? null), 6, $this->source)), "html", null, true);
                yield "' -->
  ";
            }
            // line 8
            yield "  ";
            yield $this->extensions['Drupal\Core\Template\TwigExtension']->renderVar($this->sandbox->ensureToStringAllowed(($context["svg_data"] ?? null), 8, $this->source));
            yield "
";
        } else {
            // line 10
            yield "  <img";
            yield $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["attributes"] ?? null), 10, $this->source), "html", null, true);
            yield " src=\"";
            yield $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->extensions['Drupal\Core\Template\TwigExtension']->getFileUrl($this->sandbox->ensureToStringAllowed(($context["uri"] ?? null), 10, $this->source)), "html", null, true);
            yield "\" />
";
        }
        // line 12
        if (($context["link_url"] ?? null)) {
            // line 13
            yield "  </a>
";
        }
        $this->env->getExtension('\Drupal\Core\Template\TwigExtension')
            ->checkDeprecations($context, ["link_url", "inline", "twig_debug", "uri", "svg_data", "attributes"]);        return; yield '';
    }

    /**
     * @codeCoverageIgnore
     */
    public function getTemplateName()
    {
        return "modules/contrib/svg_image_field/templates/svg-image-field-formatter.html.twig";
    }

    /**
     * @codeCoverageIgnore
     */
    public function isTraitable()
    {
        return false;
    }

    /**
     * @codeCoverageIgnore
     */
    public function getDebugInfo()
    {
        return array (  75 => 13,  73 => 12,  65 => 10,  59 => 8,  53 => 6,  50 => 5,  48 => 4,  42 => 2,  40 => 1,);
    }

    public function getSourceContext()
    {
        return new Source("", "modules/contrib/svg_image_field/templates/svg-image-field-formatter.html.twig", "/var/www/html/web/modules/contrib/svg_image_field/templates/svg-image-field-formatter.html.twig");
    }
    
    public function checkSecurity()
    {
        static $tags = array("if" => 1);
        static $filters = array("escape" => 2, "raw" => 8);
        static $functions = array("file_url" => 6);

        try {
            $this->sandbox->checkSecurity(
                ['if'],
                ['escape', 'raw'],
                ['file_url'],
                $this->source
            );
        } catch (SecurityError $e) {
            $e->setSourceContext($this->source);

            if ($e instanceof SecurityNotAllowedTagError && isset($tags[$e->getTagName()])) {
                $e->setTemplateLine($tags[$e->getTagName()]);
            } elseif ($e instanceof SecurityNotAllowedFilterError && isset($filters[$e->getFilterName()])) {
                $e->setTemplateLine($filters[$e->getFilterName()]);
            } elseif ($e instanceof SecurityNotAllowedFunctionError && isset($functions[$e->getFunctionName()])) {
                $e->setTemplateLine($functions[$e->getFunctionName()]);
            }

            throw $e;
        }

    }
}
