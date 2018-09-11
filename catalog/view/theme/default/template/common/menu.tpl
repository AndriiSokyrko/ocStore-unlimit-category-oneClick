<li>
    <a href="">
        <?= $category['name']?>
        <?php if( isset($category['children']) ): ?>
        <span class="badge pull-right"><i class="fa fa-plus"></i></span>
        <?php endif;?>
    </a>
    <?php if( isset($category['children']) ): ?>
    <ul>
        <?php  include "menu.tpl"?>
    </ul>
    <?php endif;?>
</li>