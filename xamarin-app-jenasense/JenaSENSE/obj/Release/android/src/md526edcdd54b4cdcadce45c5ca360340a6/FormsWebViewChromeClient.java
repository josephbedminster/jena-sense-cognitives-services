package md526edcdd54b4cdcadce45c5ca360340a6;


public class FormsWebViewChromeClient
	extends android.webkit.WebChromeClient
	implements
		mono.android.IGCUserPeer
{
/** @hide */
	public static final String __md_methods;
	static {
		__md_methods = 
			"";
		mono.android.Runtime.register ("Xam.Plugin.Droid.Extras.FormsWebViewChromeClient, WebView.Plugin.Droid, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null", FormsWebViewChromeClient.class, __md_methods);
	}


	public FormsWebViewChromeClient () throws java.lang.Throwable
	{
		super ();
		if (getClass () == FormsWebViewChromeClient.class)
			mono.android.TypeManager.Activate ("Xam.Plugin.Droid.Extras.FormsWebViewChromeClient, WebView.Plugin.Droid, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null", "", this, new java.lang.Object[] {  });
	}

	public FormsWebViewChromeClient (md57db71e89ef32cb69d1a370da77126e0d.FormsWebViewRenderer p0) throws java.lang.Throwable
	{
		super ();
		if (getClass () == FormsWebViewChromeClient.class)
			mono.android.TypeManager.Activate ("Xam.Plugin.Droid.Extras.FormsWebViewChromeClient, WebView.Plugin.Droid, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null", "Xam.Plugin.Droid.FormsWebViewRenderer, WebView.Plugin.Droid, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null", this, new java.lang.Object[] { p0 });
	}

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
