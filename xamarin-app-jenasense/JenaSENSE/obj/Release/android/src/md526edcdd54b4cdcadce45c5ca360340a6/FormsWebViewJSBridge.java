package md526edcdd54b4cdcadce45c5ca360340a6;


public class FormsWebViewJSBridge
	extends java.lang.Object
	implements
		mono.android.IGCUserPeer
{
/** @hide */
	public static final String __md_methods;
	static {
		__md_methods = 
			"n_InvokeAction:(Ljava/lang/String;)V:__export__\n" +
			"";
		mono.android.Runtime.register ("Xam.Plugin.Droid.Extras.FormsWebViewJSBridge, WebView.Plugin.Droid, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null", FormsWebViewJSBridge.class, __md_methods);
	}


	public FormsWebViewJSBridge () throws java.lang.Throwable
	{
		super ();
		if (getClass () == FormsWebViewJSBridge.class)
			mono.android.TypeManager.Activate ("Xam.Plugin.Droid.Extras.FormsWebViewJSBridge, WebView.Plugin.Droid, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null", "", this, new java.lang.Object[] {  });
	}

	public FormsWebViewJSBridge (md57db71e89ef32cb69d1a370da77126e0d.FormsWebViewRenderer p0) throws java.lang.Throwable
	{
		super ();
		if (getClass () == FormsWebViewJSBridge.class)
			mono.android.TypeManager.Activate ("Xam.Plugin.Droid.Extras.FormsWebViewJSBridge, WebView.Plugin.Droid, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null", "Xam.Plugin.Droid.FormsWebViewRenderer, WebView.Plugin.Droid, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null", this, new java.lang.Object[] { p0 });
	}

	@android.webkit.JavascriptInterface

	public void invokeAction (java.lang.String p0)
	{
		n_InvokeAction (p0);
	}

	private native void n_InvokeAction (java.lang.String p0);

	private java.util.ArrayList refList;
	public void monodroidAddReference (java.lang.Object obj)
	{
		if (refList == null)
			refList = new java.util.ArrayList ();
		refList.add (obj);
	}

	public void monodroidClearReferences ()
	{
		if (refList != null)
			refList.clear ();
	}
}
