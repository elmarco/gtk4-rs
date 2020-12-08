// This file was generated by gir (https://github.com/gtk-rs/gir)
// from gir-files (https://github.com/gtk-rs/gir-files)
// DO NOT EDIT

use crate::LayoutManager;
use glib::object::Cast;
use glib::translate::*;
use std::fmt;

glib::glib_wrapper! {
    pub struct FixedLayout(Object<ffi::GtkFixedLayout, ffi::GtkFixedLayoutClass>) @extends LayoutManager;

    match fn {
        get_type => || ffi::gtk_fixed_layout_get_type(),
    }
}

impl FixedLayout {
    #[doc(alias = "gtk_fixed_layout_new")]
    pub fn new() -> FixedLayout {
        assert_initialized_main_thread!();
        unsafe { LayoutManager::from_glib_full(ffi::gtk_fixed_layout_new()).unsafe_cast() }
    }
}

impl Default for FixedLayout {
    fn default() -> Self {
        Self::new()
    }
}

impl fmt::Display for FixedLayout {
    fn fmt(&self, f: &mut fmt::Formatter) -> fmt::Result {
        f.write_str("FixedLayout")
    }
}