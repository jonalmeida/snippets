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

// Gets the titles for GitHub issues and spits them out to the console
// Tested only via browser console.

for(var i =0; i < 100; i++) { 
	var str="issue_"+i;
	var issue = document.getElementById(str);
	if(issue) {
		console.log(issue.getElementsByClassName("js-navigation-open")[0].text + " (#" + i + ")");
	}
}
