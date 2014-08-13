//  Created by Jonathan Almeida on 2014-07-07.
//  Copyright (c) 2014 Jonathan Almeida. All rights reserved.
//
//  This software is provided 'as-is', without any express or implied
//  warranty. In no event will the authors be held liable for any damages
//  arising from the use of this software. Permission is granted to anyone to
//  use this software for any purpose, including commercial applications, and to
//  alter it and redistribute it freely, subject to the following restrictions:
//
//  1. The origin of this software must not be misrepresented; you must not
//     claim that you wrote the original software. If you use this software
//     in a product, an acknowledgment in the product documentation would be
//     appreciated but is not required.
//  2. Altered source versions must be plainly marked as such, and must not be
//     misrepresented as being the original software.
//  3. This notice may not be removed or altered from any source
//     distribution.
//

// Removes unnecessary random metadata from a GitHub Issue list.
// Tested only via browser console.

var all_issues = document.getElementsByClassName("table-list table-list-bordered table-list-issues js-navigation-container js-active-navigation-container")[0]
for (var i = 0; i < all_issues.childElementCount; i++) {
	var item_metadata = all_issues.children[i].getElementsByClassName("issue-meta")
	var item_labels = all_issues.children[i].getElementsByClassName("labels css-truncate")
	var item_avatar = all_issues.children[i].getElementsByClassName("table-list-cell table-list-cell-avatar")
	if(item_metadata[0])
		item_metadata[0].parentNode.removeChild(item_metadata[0])
	if(item_avatar[0])
		item_avatar[0].parentNode.removeChild(item_avatar[0])
	if(item_labels[0])
		item_labels[0].parentNode.removeChild(item_labels[0])
};
