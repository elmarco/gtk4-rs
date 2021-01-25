initSidebarItems({"constant":[["NONE_ACCESSIBLE",""],["NONE_ACTIONABLE",""],["NONE_ADJUSTMENT",""],["NONE_APPLICATION",""],["NONE_APPLICATION_WINDOW",""],["NONE_APP_CHOOSER",""],["NONE_BOX",""],["NONE_BUILDABLE",""],["NONE_BUILDER_SCOPE",""],["NONE_BUTTON",""],["NONE_CELL_AREA",""],["NONE_CELL_AREA_CONTEXT",""],["NONE_CELL_EDITABLE",""],["NONE_CELL_LAYOUT",""],["NONE_CELL_RENDERER",""],["NONE_CELL_RENDERER_TEXT",""],["NONE_CHECK_BUTTON",""],["NONE_COLOR_CHOOSER",""],["NONE_COMBO_BOX",""],["NONE_CONSTRAINT_TARGET",""],["NONE_DIALOG",""],["NONE_DRAWING_AREA",""],["NONE_EDITABLE",""],["NONE_ENTRY",""],["NONE_ENTRY_BUFFER",""],["NONE_EVENT_CONTROLLER",""],["NONE_FILE_CHOOSER",""],["NONE_FILTER",""],["NONE_FIXED",""],["NONE_FLOW_BOX_CHILD",""],["NONE_FONT_CHOOSER",""],["NONE_FRAME",""],["NONE_GESTURE",""],["NONE_GESTURE_DRAG",""],["NONE_GESTURE_SINGLE",""],["NONE_GL_AREA",""],["NONE_GRID",""],["NONE_IM_CONTEXT",""],["NONE_IM_CONTEXT_SIMPLE",""],["NONE_IM_MULTICONTEXT",""],["NONE_LAYOUT_CHILD",""],["NONE_LAYOUT_MANAGER",""],["NONE_LIST_BASE",""],["NONE_LIST_BOX_ROW",""],["NONE_LIST_ITEM_FACTORY",""],["NONE_LIST_STORE",""],["NONE_MEDIA_FILE",""],["NONE_MEDIA_STREAM",""],["NONE_MOUNT_OPERATION",""],["NONE_MULTI_FILTER",""],["NONE_NATIVE",""],["NONE_NATIVE_DIALOG",""],["NONE_ORIENTABLE",""],["NONE_POPOVER",""],["NONE_PRINT_OPERATION",""],["NONE_PRINT_OPERATION_PREVIEW",""],["NONE_RANGE",""],["NONE_RECENT_MANAGER",""],["NONE_ROOT",""],["NONE_SCALE",""],["NONE_SCALE_BUTTON",""],["NONE_SCROLLABLE",""],["NONE_SELECTION_MODEL",""],["NONE_SHORTCUT_ACTION",""],["NONE_SHORTCUT_MANAGER",""],["NONE_SHORTCUT_TRIGGER",""],["NONE_SORTER",""],["NONE_STYLE_CONTEXT",""],["NONE_STYLE_PROVIDER",""],["NONE_TEXT_BUFFER",""],["NONE_TEXT_CHILD_ANCHOR",""],["NONE_TEXT_MARK",""],["NONE_TEXT_TAG",""],["NONE_TEXT_VIEW",""],["NONE_TOGGLE_BUTTON",""],["NONE_TREE_DRAG_DEST",""],["NONE_TREE_DRAG_SOURCE",""],["NONE_TREE_MODEL",""],["NONE_TREE_MODEL_FILTER",""],["NONE_TREE_MODEL_SORT",""],["NONE_TREE_SORTABLE",""],["NONE_TREE_STORE",""],["NONE_TREE_VIEW",""],["NONE_WIDGET",""],["NONE_WINDOW",""],["NONE_WINDOW_GROUP",""],["STYLE_PROVIDER_PRIORITY_APPLICATION",""],["STYLE_PROVIDER_PRIORITY_FALLBACK",""],["STYLE_PROVIDER_PRIORITY_SETTINGS",""],["STYLE_PROVIDER_PRIORITY_THEME",""],["STYLE_PROVIDER_PRIORITY_USER",""]],"enum":[["AccessibleAutocomplete","The possible values for the `AccessibleProperty::Autocomplete` accessible property."],["AccessibleInvalidState","The possible values for the `AccessibleState::Invalid` accessible state."],["AccessibleProperty","The possible accessible properties of a `Accessible`."],["AccessibleRelation","The possible accessible relations of a `Accessible`. Accessible relations can be references to other widgets, integers or strings."],["AccessibleRole","The accessible role for a `Accessible` implementation."],["AccessibleSort","The possible values for the `AccessibleProperty::Sort` accessible property."],["AccessibleState","The possible accessible states of a `Accessible`."],["AccessibleTristate","The possible values for the `AccessibleState::Pressed` accessible state."],["Align","Controls how a widget deals with extra space in a single (x or y) dimension."],["ArrowType","Used to indicate the direction in which an arrow should point."],["AssistantPageType","An enum for determining the page role inside the `Assistant`. It's used to handle buttons sensitivity and visibility."],["BaselinePosition","Whenever a container has some form of natural row it may align children in that row along a common typographical baseline. If the amount of vertical space in the row is taller than the total requested height of the baseline-aligned children then it can use a `BaselinePosition` to select where to put the baseline inside the extra available space."],["BorderStyle","Describes how the border of a UI element should be rendered."],["BuilderError","Error codes that identify various errors that can occur while using `Builder`."],["ButtonsType","Prebuilt sets of buttons for the dialog. If none of these choices are appropriate, simply use `ButtonsType::None` then call `Dialog::add_buttons`."],["CellRendererAccelMode","Determines if the edited accelerators are GTK accelerators. If they are, consumed modifiers are suppressed, only accelerators accepted by GTK are allowed, and the accelerators are rendered in the same way as they are in menus."],["CellRendererMode","Identifies how the user can interact with a particular cell."],["ConstraintAttribute","The widget attributes that can be used when creating a `Constraint`."],["ConstraintRelation","The relation between two terms of a constraint."],["ConstraintStrength","The strength of a constraint, expressed as a symbolic constant."],["ConstraintVflParserError","Domain for VFL parsing errors."],["CornerType","Specifies which corner a child widget should be placed in when packed into a `ScrolledWindow`. This is effectively the opposite of where the scroll bars are placed."],["CssParserError","Errors that can occur while parsing CSS."],["CssParserWarning","Warnings that can occur while parsing CSS."],["DeleteType","See also: `Entry::delete-from-cursor`."],["DirectionType","Focus movement types."],["EditableProperties",""],["EntryIconPosition","Specifies the side of the entry at which an icon is placed."],["EventSequenceState","Describes the state of a `gdk::EventSequence` in a `Gesture`."],["FileChooserAction","Describes whether a `FileChooser` is being used to open existing files or to save to a possibly new file."],["FileChooserError","These identify the various errors that can occur while calling `FileChooser` functions."],["FilterChange","Describes changes in a filter in more detail and allows objects using the filter to optimize refiltering items."],["FilterMatch","Describes the known strictness of a filter."],["IconSize","Built-in icon sizes."],["IconThemeError","Error codes for `IconTheme` operations."],["IconViewDropPosition","An enum for determining where a dropped item goes."],["ImageType","Describes the image data representation used by a `Image`. If you want to get the image from the widget, you can only get the currently-stored representation. e.g. if the `Image::get_storage_type` returns `ImageType::Paintable`, then you can call `Image::get_paintable`. For empty images, you can request any storage type (call any of the \"get\" functions), but they will all return `None` values."],["InputPurpose","Describes primary purpose of the input widget. This information is useful for on-screen keyboards and similar input methods to decide which keys should be presented to the user."],["Justification","Used for justifying the text inside a `Label` widget."],["LevelBarMode","Describes how `LevelBar` contents should be rendered. Note that this enumeration could be extended with additional modes in the future."],["License","The type of license for an application."],["MessageType","The type of message being displayed in the dialog."],["MovementStep",""],["NotebookTab","The parameter used in the action signals of `Notebook`."],["NumberUpLayout","Used to determine the layout of pages on a sheet when printing multiple pages per sheet."],["Ordering","Describes the way two values can be compared."],["Orientation","Represents the orientation of widgets and other objects which can be switched between horizontal and vertical orientation on the fly, like `Box` or `GesturePan`."],["Overflow","Defines how content overflowing a given area should be handled, such as with `WidgetExt::set_overflow`. This property is modeled after the CSS overflow property, but implements it only partially."],["PackType","Represents the packing location of a children in its parent. See `WindowControls` for example."],["PadActionType","The type of a pad action."],["PageOrientation","See also `PrintSettings::set_orientation`."],["PageSet","See also `gtk_print_job_set_page_set`."],["PanDirection","Describes the panning direction of a `GesturePan`"],["PolicyType","Determines how the size should be computed to achieve the one of the visibility mode for the scrollbars."],["PositionType","Describes which edge of a widget a certain feature is positioned at, e.g. the tabs of a `Notebook`, or the label of a `Scale`."],["PrintDuplex","See also `PrintSettings::set_duplex`."],["PrintError","Error codes that identify various errors that can occur while using the GTK printing support."],["PrintOperationAction","The `action` parameter to `PrintOperationExt::run` determines what action the print operation should perform."],["PrintOperationResult","A value of this type is returned by `PrintOperationExt::run`."],["PrintPages","See also `gtk_print_job_set_pages`"],["PrintQuality","See also `PrintSettings::set_quality`."],["PrintStatus","The status gives a rough indication of the completion of a running print operation."],["PropagationLimit","Describes limits of a `EventController` for handling events targeting other widgets."],["PropagationPhase","Describes the stage at which events are fed into a `EventController`."],["RecentManagerError","Error codes for `RecentManager` operations"],["ResponseType","Predefined values for use as response ids in `DialogExt::add_button`. All predefined values are negative; GTK leaves values of 0 or greater for application-defined response ids."],["RevealerTransitionType","These enumeration values describe the possible transitions when the child of a `Revealer` widget is shown or hidden."],["ScrollStep",""],["ScrollType","Scrolling types."],["ScrollablePolicy","Defines the policy to be used in a scrollable widget when updating the scrolled window adjustments in a given orientation."],["SelectionMode","Used to control what selections users are allowed to make."],["SensitivityType","Determines how GTK handles the sensitivity of various controls, such as combo box buttons."],["ShortcutScope","Describes where `GtkShortcuts` added to a `ShortcutController` get handled."],["ShortcutType","`ShortcutType` specifies the kind of shortcut that is being described. More values may be added to this enumeration over time."],["SizeGroupMode","The mode of the size group determines the directions in which the size group affects the requested sizes of its component widgets."],["SizeRequestMode","Specifies a preference for height-for-width or width-for-height geometry management."],["SortColumn",""],["SortType","Determines the direction of a sort."],["SorterChange","Describes changes in a sorter in more detail and allows users to optimize resorting."],["SorterOrder","Describes the type of order that a `Sorter` may describe."],["SpinButtonUpdatePolicy","The spin button update policy determines whether the spin button displays values even if they are outside the bounds of its adjustment. See `SpinButton::set_update_policy`."],["SpinType","The values of the `SpinType` enumeration are used to specify the change to make in `SpinButton::spin`."],["StackTransitionType","These enumeration values describe the possible transitions between pages in a `Stack` widget."],["StringFilterMatchMode","Specifies how search strings are matched inside text."],["SystemSetting","Values that can be passed to the `WidgetClass`.system_setting_changed vfunc to indicate that a system setting has changed and widgets may need to drop caches, or react otherwise."],["TextDirection","Reading directions for text."],["TextExtendSelection","Granularity types that extend the text selection. Use the `TextView::extend-selection` signal to customize the selection."],["TextViewLayer","Used to reference the layers of `TextView` for the purpose of customized drawing with the ::snapshot_layer vfunc."],["TextWindowType","Used to reference the parts of `TextView`."],["TreeViewColumnSizing","The sizing method the column uses to determine its width. Please note that `TreeViewColumnSizing::Autosize` are inefficient for large views, and can make columns appear choppy."],["TreeViewDropPosition","An enum for determining where a dropped row goes."],["TreeViewGridLines","Used to indicate which grid lines to draw in a tree view."],["Unit","See also `PrintSettings::set_paper_width`."],["WrapMode","Describes a type of line wrapping."]],"fn":[["accelerator_get_default_mod_mask",""],["accelerator_get_label",""],["accelerator_get_label_with_keycode",""],["accelerator_name",""],["accelerator_name_with_keycode",""],["accelerator_parse",""],["accelerator_valid",""],["check_version",""],["css_parser_warning_quark",""],["disable_setlocale",""],["get_binary_age",""],["get_debug_flags",""],["get_default_language",""],["get_interface_age",""],["get_locale_direction",""],["get_major_version",""],["get_micro_version",""],["get_minor_version",""],["hsv_to_rgb",""],["im_modules_init",""],["init","Tries to initialize GTK+."],["is_initialized","Returns `true` if GTK has been initialized."],["is_initialized_main_thread","Returns `true` if GTK has been initialized and this is the main thread."],["print_run_page_setup_dialog",""],["print_run_page_setup_dialog_async",""],["render_activity",""],["render_arrow",""],["render_background",""],["render_check",""],["render_expander",""],["render_focus",""],["render_frame",""],["render_handle",""],["render_icon",""],["render_layout",""],["render_line",""],["render_option",""],["rgb_to_hsv",""],["set_debug_flags",""],["set_initialized","Informs this crate that GTK has been initialized and the current thread is the main one."],["show_uri",""],["test_accessible_assertion_message_role",""],["test_accessible_has_property",""],["test_accessible_has_relation",""],["test_accessible_has_role",""],["test_accessible_has_state",""],["test_register_all_types",""],["test_widget_wait_for_draw",""],["tree_create_row_drag_content",""],["tree_get_row_drag_data",""]],"mod":[["functions",""],["prelude","Traits intended for blanket imports."],["subclass",""]],"static":[["IM_MODULE_EXTENSION_POINT_NAME",""],["LEVEL_BAR_OFFSET_FULL",""],["LEVEL_BAR_OFFSET_HIGH",""],["LEVEL_BAR_OFFSET_LOW",""],["MEDIA_FILE_EXTENSION_POINT_NAME",""],["PAPER_NAME_A3",""],["PAPER_NAME_A4",""],["PAPER_NAME_A5",""],["PAPER_NAME_B5",""],["PAPER_NAME_EXECUTIVE",""],["PAPER_NAME_LEGAL",""],["PAPER_NAME_LETTER",""],["PRINT_SETTINGS_COLLATE",""],["PRINT_SETTINGS_DEFAULT_SOURCE",""],["PRINT_SETTINGS_DITHER",""],["PRINT_SETTINGS_DUPLEX",""],["PRINT_SETTINGS_FINISHINGS",""],["PRINT_SETTINGS_MEDIA_TYPE",""],["PRINT_SETTINGS_NUMBER_UP",""],["PRINT_SETTINGS_NUMBER_UP_LAYOUT",""],["PRINT_SETTINGS_N_COPIES",""],["PRINT_SETTINGS_ORIENTATION",""],["PRINT_SETTINGS_OUTPUT_BASENAME",""],["PRINT_SETTINGS_OUTPUT_BIN",""],["PRINT_SETTINGS_OUTPUT_DIR",""],["PRINT_SETTINGS_OUTPUT_FILE_FORMAT",""],["PRINT_SETTINGS_OUTPUT_URI",""],["PRINT_SETTINGS_PAGE_RANGES",""],["PRINT_SETTINGS_PAGE_SET",""],["PRINT_SETTINGS_PAPER_FORMAT",""],["PRINT_SETTINGS_PAPER_HEIGHT",""],["PRINT_SETTINGS_PAPER_WIDTH",""],["PRINT_SETTINGS_PRINTER",""],["PRINT_SETTINGS_PRINTER_LPI",""],["PRINT_SETTINGS_PRINT_PAGES",""],["PRINT_SETTINGS_QUALITY",""],["PRINT_SETTINGS_RESOLUTION",""],["PRINT_SETTINGS_RESOLUTION_X",""],["PRINT_SETTINGS_RESOLUTION_Y",""],["PRINT_SETTINGS_REVERSE",""],["PRINT_SETTINGS_SCALE",""],["PRINT_SETTINGS_USE_COLOR",""],["PRINT_SETTINGS_WIN32_DRIVER_EXTRA",""],["PRINT_SETTINGS_WIN32_DRIVER_VERSION",""]],"struct":[["ATContext",""],["AboutDialog",""],["AboutDialogBuilder",""],["Accessible",""],["ActionBar",""],["ActionBarBuilder",""],["Actionable",""],["ActivateAction",""],["Adjustment",""],["AdjustmentBuilder",""],["AlternativeTrigger",""],["AlternativeTriggerBuilder",""],["AnyFilter",""],["AppChooser",""],["AppChooserButton",""],["AppChooserButtonBuilder",""],["AppChooserDialog",""],["AppChooserDialogBuilder",""],["AppChooserWidget",""],["AppChooserWidgetBuilder",""],["Application",""],["ApplicationBuilder",""],["ApplicationInhibitFlags",""],["ApplicationWindow",""],["ApplicationWindowBuilder",""],["AspectFrame",""],["AspectFrameBuilder",""],["Assistant",""],["AssistantBuilder",""],["AssistantPage",""],["AssistantPageBuilder",""],["BinLayout",""],["Bitset",""],["BookmarkList",""],["BookmarkListBuilder",""],["BoolFilter",""],["BoolFilterBuilder",""],["Border",""],["Box",""],["BoxBuilder",""],["BoxLayout",""],["BoxLayoutBuilder",""],["Buildable",""],["Builder",""],["BuilderBuilder",""],["BuilderClosureFlags",""],["BuilderListItemFactory",""],["BuilderListItemFactoryBuilder",""],["BuilderScope",""],["Button",""],["ButtonBuilder",""],["Calendar",""],["CalendarBuilder",""],["CallbackAction",""],["CellArea",""],["CellAreaBox",""],["CellAreaBoxBuilder",""],["CellAreaContext",""],["CellAreaContextBuilder",""],["CellEditable",""],["CellLayout",""],["CellRenderer",""],["CellRendererAccel",""],["CellRendererAccelBuilder",""],["CellRendererCombo",""],["CellRendererComboBuilder",""],["CellRendererPixbuf",""],["CellRendererPixbufBuilder",""],["CellRendererProgress",""],["CellRendererProgressBuilder",""],["CellRendererSpin",""],["CellRendererSpinBuilder",""],["CellRendererSpinner",""],["CellRendererSpinnerBuilder",""],["CellRendererState",""],["CellRendererText",""],["CellRendererTextBuilder",""],["CellRendererToggle",""],["CellRendererToggleBuilder",""],["CellView",""],["CellViewBuilder",""],["CenterBox",""],["CenterBoxBuilder",""],["CenterLayout",""],["CheckButton",""],["CheckButtonBuilder",""],["ColorButton",""],["ColorButtonBuilder",""],["ColorChooser",""],["ColorChooserDialog",""],["ColorChooserDialogBuilder",""],["ColorChooserWidget",""],["ColorChooserWidgetBuilder",""],["ColumnView",""],["ColumnViewBuilder",""],["ColumnViewColumn",""],["ColumnViewColumnBuilder",""],["ComboBox",""],["ComboBoxBuilder",""],["ComboBoxText",""],["ComboBoxTextBuilder",""],["Constraint",""],["ConstraintBuilder",""],["ConstraintGuide",""],["ConstraintGuideBuilder",""],["ConstraintLayout",""],["ConstraintLayoutChild",""],["ConstraintTarget",""],["CssLocation",""],["CssProvider",""],["CssSection",""],["CustomFilter",""],["CustomSorter",""],["DebugFlags",""],["Dialog",""],["DialogBuilder",""],["DialogFlags",""],["DirectoryList",""],["DirectoryListBuilder",""],["DragIcon",""],["DragIconBuilder",""],["DragSource",""],["DragSourceBuilder",""],["DrawingArea",""],["DrawingAreaBuilder",""],["DropControllerMotion",""],["DropDown",""],["DropDownBuilder",""],["DropTarget",""],["DropTargetAsync",""],["DropTargetAsyncBuilder",""],["DropTargetBuilder",""],["Editable",""],["EditableLabel",""],["EmojiChooser",""],["Entry",""],["EntryBuffer",""],["EntryBufferBuilder",""],["EntryBuilder",""],["EntryCompletion",""],["EntryCompletionBuilder",""],["EventController",""],["EventControllerFocus",""],["EventControllerKey",""],["EventControllerLegacy",""],["EventControllerMotion",""],["EventControllerScroll",""],["EventControllerScrollBuilder",""],["EventControllerScrollFlags",""],["EveryFilter",""],["Expander",""],["ExpanderBuilder",""],["FileChooser",""],["FileChooserDialog",""],["FileChooserDialogBuilder",""],["FileChooserNative",""],["FileChooserNativeBuilder",""],["FileChooserWidget",""],["FileChooserWidgetBuilder",""],["FileFilter",""],["FileFilterBuilder",""],["Filter",""],["FilterListModel",""],["FilterListModelBuilder",""],["Fixed",""],["FixedBuilder",""],["FixedLayout",""],["FixedLayoutChild",""],["FixedLayoutChildBuilder",""],["FlattenListModel",""],["FlattenListModelBuilder",""],["FlowBox",""],["FlowBoxBuilder",""],["FlowBoxChild",""],["FlowBoxChildBuilder",""],["FontButton",""],["FontButtonBuilder",""],["FontChooser",""],["FontChooserDialog",""],["FontChooserDialogBuilder",""],["FontChooserLevel",""],["FontChooserWidget",""],["FontChooserWidgetBuilder",""],["Frame",""],["FrameBuilder",""],["GLArea",""],["GLAreaBuilder",""],["Gesture",""],["GestureClick",""],["GestureDrag",""],["GestureLongPress",""],["GestureLongPressBuilder",""],["GesturePan",""],["GesturePanBuilder",""],["GestureRotate",""],["GestureSingle",""],["GestureSingleBuilder",""],["GestureStylus",""],["GestureSwipe",""],["GestureZoom",""],["Grid",""],["GridBuilder",""],["GridLayout",""],["GridLayoutBuilder",""],["GridLayoutChild",""],["GridLayoutChildBuilder",""],["GridView",""],["GridViewBuilder",""],["HeaderBar",""],["HeaderBarBuilder",""],["IMContext",""],["IMContextSimple",""],["IMMulticontext",""],["IconLookupFlags",""],["IconPaintable",""],["IconPaintableBuilder",""],["IconTheme",""],["IconThemeBuilder",""],["IconView",""],["IconViewBuilder",""],["Image",""],["ImageBuilder",""],["InfoBar",""],["InfoBarBuilder",""],["InputHints",""],["Label",""],["LabelBuilder",""],["LayoutChild",""],["LayoutManager",""],["LevelBar",""],["LevelBarBuilder",""],["LinkButton",""],["LinkButtonBuilder",""],["ListBase",""],["ListBox",""],["ListBoxBuilder",""],["ListBoxRow",""],["ListBoxRowBuilder",""],["ListItem",""],["ListItemBuilder",""],["ListItemFactory",""],["ListStore",""],["ListView",""],["ListViewBuilder",""],["LockButton",""],["LockButtonBuilder",""],["MapListModel",""],["MapListModelBuilder",""],["MediaControls",""],["MediaControlsBuilder",""],["MediaFile",""],["MediaStream",""],["MenuButton",""],["MenuButtonBuilder",""],["MessageDialog",""],["MessageDialogBuilder",""],["MnemonicAction",""],["MountOperation",""],["MountOperationBuilder",""],["MultiFilter",""],["MultiSelection",""],["MultiSelectionBuilder",""],["MultiSorter",""],["NamedAction",""],["NamedActionBuilder",""],["Native",""],["NativeDialog",""],["NeverTrigger",""],["NoSelection",""],["NoSelectionBuilder",""],["Notebook",""],["NotebookBuilder",""],["NotebookPage",""],["NotebookPageBuilder",""],["NothingAction",""],["NumericSorter",""],["NumericSorterBuilder",""],["Orientable",""],["Overlay",""],["OverlayBuilder",""],["OverlayLayout",""],["OverlayLayoutChild",""],["OverlayLayoutChildBuilder",""],["PadActionEntry",""],["PadController",""],["PadControllerBuilder",""],["PageRange",""],["PageSetup",""],["Paned",""],["PanedBuilder",""],["PaperSize",""],["PasswordEntry",""],["PasswordEntryBuilder",""],["PickFlags",""],["Picture",""],["PictureBuilder",""],["Popover",""],["PopoverBuilder",""],["PopoverMenu",""],["PopoverMenuBar",""],["PopoverMenuBarBuilder",""],["PopoverMenuBuilder",""],["PopoverMenuFlags",""],["PrintContext",""],["PrintOperation",""],["PrintOperationBuilder",""],["PrintOperationPreview",""],["PrintSettings",""],["ProgressBar",""],["ProgressBarBuilder",""],["Range",""],["RangeBuilder",""],["RecentData",""],["RecentInfo",""],["RecentManager",""],["RecentManagerBuilder",""],["Requisition","A `Requisition`-struct represents the desired size of a widget. See [`Widget`’s geometry management section][geometry-management] for more information."],["Revealer",""],["RevealerBuilder",""],["Root",""],["Scale",""],["ScaleBuilder",""],["ScaleButton",""],["ScaleButtonBuilder",""],["Scrollable",""],["Scrollbar",""],["ScrollbarBuilder",""],["ScrolledWindow",""],["ScrolledWindowBuilder",""],["SearchBar",""],["SearchBarBuilder",""],["SearchEntry",""],["SearchEntryBuilder",""],["SelectionFilterModel",""],["SelectionFilterModelBuilder",""],["SelectionModel",""],["Separator",""],["SeparatorBuilder",""],["Settings",""],["SettingsBuilder",""],["Shortcut",""],["ShortcutAction",""],["ShortcutActionFlags",""],["ShortcutBuilder",""],["ShortcutController",""],["ShortcutControllerBuilder",""],["ShortcutLabel",""],["ShortcutLabelBuilder",""],["ShortcutManager",""],["ShortcutTrigger",""],["ShortcutsGroup",""],["ShortcutsGroupBuilder",""],["ShortcutsSection",""],["ShortcutsSectionBuilder",""],["ShortcutsShortcut",""],["ShortcutsShortcutBuilder",""],["ShortcutsWindow",""],["ShortcutsWindowBuilder",""],["SignalAction",""],["SignalActionBuilder",""],["SignalListItemFactory",""],["SingleSelection",""],["SingleSelectionBuilder",""],["SizeGroup",""],["SizeGroupBuilder",""],["SliceListModel",""],["SliceListModelBuilder",""],["Snapshot",""],["SortListModel",""],["SortListModelBuilder",""],["Sorter",""],["SpinButton",""],["SpinButtonBuilder",""],["Spinner",""],["SpinnerBuilder",""],["Stack",""],["StackBuilder",""],["StackPage",""],["StackPageBuilder",""],["StackSidebar",""],["StackSidebarBuilder",""],["StackSwitcher",""],["StackSwitcherBuilder",""],["StateFlags",""],["Statusbar",""],["StatusbarBuilder",""],["StringFilter",""],["StringFilterBuilder",""],["StringList",""],["StringObject",""],["StringSorter",""],["StringSorterBuilder",""],["StyleContext",""],["StyleContextBuilder",""],["StyleContextPrintFlags",""],["StyleProvider",""],["Switch",""],["SwitchBuilder",""],["Text",""],["TextBuffer",""],["TextBufferBuilder",""],["TextBuilder",""],["TextChildAnchor",""],["TextIter",""],["TextMark",""],["TextMarkBuilder",""],["TextSearchFlags",""],["TextTag",""],["TextTagBuilder",""],["TextTagTable",""],["TextView",""],["TextViewBuilder",""],["TickCallbackId",""],["ToggleButton",""],["ToggleButtonBuilder",""],["Tooltip",""],["TreeDragDest",""],["TreeDragSource",""],["TreeExpander",""],["TreeExpanderBuilder",""],["TreeIter",""],["TreeListModel",""],["TreeListModelBuilder",""],["TreeListRow",""],["TreeListRowBuilder",""],["TreeListRowSorter",""],["TreeListRowSorterBuilder",""],["TreeModel",""],["TreeModelFilter",""],["TreeModelFilterBuilder",""],["TreeModelFlags",""],["TreeModelSort",""],["TreeModelSortBuilder",""],["TreePath",""],["TreeRowReference",""],["TreeSelection",""],["TreeSelectionBuilder",""],["TreeSortable",""],["TreeStore",""],["TreeView",""],["TreeViewBuilder",""],["TreeViewColumn",""],["TreeViewColumnBuilder",""],["Video",""],["VideoBuilder",""],["Viewport",""],["ViewportBuilder",""],["VolumeButton",""],["VolumeButtonBuilder",""],["Widget",""],["WidgetPaintable",""],["WidgetPaintableBuilder",""],["Window",""],["WindowBuilder",""],["WindowControls",""],["WindowControlsBuilder",""],["WindowGroup",""],["WindowHandle",""],["WindowHandleBuilder",""]],"trait":[["AccessibleExt","Trait containing all `Accessible` methods."],["ActionableExt","Trait containing all `Actionable` methods."],["AdjustmentExt","Trait containing all `Adjustment` methods."],["AppChooserExt","Trait containing all `AppChooser` methods."],["ApplicationWindowExt","Trait containing all `ApplicationWindow` methods."],["BoxExt","Trait containing all `Box` methods."],["BuildableExt","Trait containing all `Buildable` methods."],["BuilderScopeExt","Trait containing all `BuilderScope` methods."],["ButtonExt","Trait containing all `Button` methods."],["CellAreaContextExt","Trait containing all `CellAreaContext` methods."],["CellAreaExt","Trait containing all `CellArea` methods."],["CellEditableExt","Trait containing all `CellEditable` methods."],["CellLayoutExt","Trait containing all `CellLayout` methods."],["CellRendererExt","Trait containing all `CellRenderer` methods."],["CellRendererTextExt","Trait containing all `CellRendererText` methods."],["CheckButtonExt","Trait containing all `CheckButton` methods."],["ColorChooserExt","Trait containing all `ColorChooser` methods."],["ComboBoxExt","Trait containing all `ComboBox` methods."],["ConstraintTargetExt","Trait containing all `ConstraintTarget` methods."],["DialogExt","Trait containing all `Dialog` methods."],["DrawingAreaExt","Trait containing all `DrawingArea` methods."],["EditableExt","Trait containing all `Editable` methods."],["EntryBufferExt","Trait containing all `EntryBuffer` methods."],["EntryExt","Trait containing all `Entry` methods."],["EventControllerExt","Trait containing all `EventController` methods."],["FileChooserExt","Trait containing all `FileChooser` methods."],["FilterExt","Trait containing all `Filter` methods."],["FixedExt","Trait containing all `Fixed` methods."],["FlowBoxChildExt","Trait containing all `FlowBoxChild` methods."],["FontChooserExt","Trait containing all `FontChooser` methods."],["FrameExt","Trait containing all `Frame` methods."],["GLAreaExt","Trait containing all `GLArea` methods."],["GestureDragExt","Trait containing all `GestureDrag` methods."],["GestureExt","Trait containing all `Gesture` methods."],["GestureSingleExt","Trait containing all `GestureSingle` methods."],["GridExt","Trait containing all `Grid` methods."],["GtkApplicationExt","Trait containing all `Application` methods."],["GtkListStoreExt","Trait containing all `ListStore` methods."],["GtkWindowExt","Trait containing all `Window` methods."],["IMContextExt","Trait containing all `IMContext` methods."],["IMMulticontextExt","Trait containing all `IMMulticontext` methods."],["LayoutChildExt","Trait containing all `LayoutChild` methods."],["LayoutManagerExt","Trait containing all `LayoutManager` methods."],["ListBaseExt","Trait containing all `ListBase` methods."],["ListBoxRowExt","Trait containing all `ListBoxRow` methods."],["MediaFileExt","Trait containing all `MediaFile` methods."],["MediaStreamExt","Trait containing all `MediaStream` methods."],["MountOperationExt","Trait containing all `MountOperation` methods."],["MultiFilterExt","Trait containing all `MultiFilter` methods."],["NativeDialogExt","Trait containing all `NativeDialog` methods."],["NativeExt","Trait containing all `Native` methods."],["OrientableExt","Trait containing all `Orientable` methods."],["PopoverExt","Trait containing all `Popover` methods."],["PrintOperationExt","Trait containing all `PrintOperation` methods."],["PrintOperationPreviewExt","Trait containing all `PrintOperationPreview` methods."],["RangeExt","Trait containing all `Range` methods."],["RecentManagerExt","Trait containing all `RecentManager` methods."],["RootExt","Trait containing all `Root` methods."],["ScaleButtonExt","Trait containing all `ScaleButton` methods."],["ScaleExt","Trait containing all `Scale` methods."],["ScrollableExt","Trait containing all `Scrollable` methods."],["SelectionModelExt","Trait containing all `SelectionModel` methods."],["ShortcutActionExt","Trait containing all `ShortcutAction` methods."],["ShortcutManagerExt","Trait containing all `ShortcutManager` methods."],["ShortcutTriggerExt","Trait containing all `ShortcutTrigger` methods."],["SorterExt","Trait containing all `Sorter` methods."],["StyleContextExt","Trait containing all `StyleContext` methods."],["StyleProviderExt","Trait containing all `StyleProvider` methods."],["TextBufferExt","Trait containing all `TextBuffer` methods."],["TextChildAnchorExt","Trait containing all `TextChildAnchor` methods."],["TextMarkExt","Trait containing all `TextMark` methods."],["TextTagExt","Trait containing all `TextTag` methods."],["TextViewExt","Trait containing all `TextView` methods."],["ToggleButtonExt","Trait containing all `ToggleButton` methods."],["TreeDragDestExt","Trait containing all `TreeDragDest` methods."],["TreeDragSourceExt","Trait containing all `TreeDragSource` methods."],["TreeModelExt","Trait containing all `TreeModel` methods."],["TreeModelFilterExt","Trait containing all `TreeModelFilter` methods."],["TreeModelSortExt","Trait containing all `TreeModelSort` methods."],["TreeSortableExt","Trait containing all `TreeSortable` methods."],["TreeStoreExt","Trait containing all `TreeStore` methods."],["TreeViewExt","Trait containing all `TreeView` methods."],["WidgetExt","Trait containing all `Widget` methods."],["WindowGroupExt","Trait containing all `WindowGroup` methods."]],"type":[["Allocation",""]]});