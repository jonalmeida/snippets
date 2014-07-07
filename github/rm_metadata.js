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

var issue_list = document.getElementsByClassName("list-group issue-list-group")
var all_issues = issue_list[0].getElementsByClassName("list-group-item issue-list-item js-list-browser-item js-navigation-item read selectable")
for(var i = 0; i < all_issues.length; i++) {
	var item_metadata = all_issues[i].getElementsByClassName("list-group-item-meta")
	var item_avatar = all_issues[i].getElementsByClassName("assignee tooltipped tooltipped-w")
	var item_labels = all_issues[i].getElementsByClassName("labels")
	item_metadata[0].parentNode.removeChild(item_metadata[0])
	item_avatar[0].parentNode.removeChild(item_avatar[0])
	item_labels[0].parentNode.removeChild(item_labels[0])
}