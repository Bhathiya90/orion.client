/*******************************************************************************
 * @license
 * Copyright (c) 2011, 2012 IBM Corporation and others.
 * All rights reserved. This program and the accompanying materials are made 
 * available under the terms of the Eclipse Public License v1.0 
 * (http://www.eclipse.org/legal/epl-v10.html), and the Eclipse Distribution 
 * License v1.0 (http://www.eclipse.org/org/documents/edl-v10.html). 
 *
 * Contributors:
 *     IBM Corporation - initial API and implementation
 *******************************************************************************/
/*global define */
define(['orion/bootstrap', 'orion/widgets/nav/fileBrowser'], function(mBootstrap, mFileBrowser) {
	mBootstrap.startup().then(function(core) {
		var serviceRegistry = core.serviceRegistry;
		var pluginRegistry = core.pluginRegistry;
		var preferences = core.preferences;
		mFileBrowser.setUpEditor(serviceRegistry, pluginRegistry, preferences, true, false, true); 
	});
});
