#include <sourcemod>

public Plugin:myinfo = 
{
	name = "Popup",
	author = "NavyCommander",
	description = "Yolo - Might AS Well try now!",
	version = "1.0",
	url = "N/A"
}

public OnPluginStart()
{
	RegConsoleCmd("sm_menu", showmenu, "Navy created me!");
	RegConsoleCmd("sm_test", commands, "Test Command");
	RegConsoleCmd("sm_google", google, "Google.com what else do you need?!");
}

public Action:commands(client, args)
{
	PrintToChat(client, "\x01 1 ..  \x02 2 ..  \x03 3 ..  \x04 4 ..  \x05 5 ..  \x06 6 ..  \x07 7 ..  \x08 8 ..  \x09 9 ..  \x10 10 ..  \x11 11 ..  \x12 12 ..  \x13 13 ..  \x14 14 ..  \x15 15 ..  \x16 16 ..  \x17 17 ..  \x18 18 ..  ");
}

public Action:showmenu(client, args)
{
	MinigameMain(client);
	return Plugin_Handled;
}

public Action:google(client, args)
{
	ShowMOTDPanel(client, "[|GOOGLE|]", "http://www.Google.com", MOTDPANEL_TYPE_URL)
	return Plugin_Handled;
}




public MinigameMain(client)
{
	new Handle:g_hMenuHaupt = CreateMenu(MenuHandler_Main);
	SetMenuTitle(g_hMenuHaupt,"Menu");
	AddMenuItem(g_hMenuHaupt, "1", "CMDS");
	AddMenuItem(g_hMenuHaupt, "2", "Google");
	SetMenuExitButton(g_hMenuHaupt, true);
	DisplayMenu(g_hMenuHaupt, client, MENU_TIME_FOREVER);
}

public MinigameCMDS(client)
{
	new Handle:g_hMenuHaupt = CreateMenu(MenuHandler_lol);
	SetMenuTitle(g_hMenuHaupt,"CMDs");
	AddMenuItem(g_hMenuHaupt, "1", "!Menu - This Menu...");
	AddMenuItem(g_hMenuHaupt, "2", "!Google - Google.com");
	SetMenuExitButton(g_hMenuHaupt, true);
	DisplayMenu(g_hMenuHaupt, client, MENU_TIME_FOREVER);
}

public MenuHandler_Main(Handle:menu, MenuAction:action, client, param2)
{
	if (action == MenuAction_Select)
	{
		new String:id[50];
		GetMenuItem(menu, param2, id, sizeof(id));
		new item = StringToInt(id);
		if(item == 1)
		{
			MinigameCMDS(client);
		}
		else if(item == 2)
		{
			ShowMOTDPanel(client, "|Google|", "http://www.google.com/", MOTDPANEL_TYPE_URL)
		}
		
	}
	else if (action == MenuAction_End)
	{
		CloseHandle(menu);
	}
}

public MenuHandler_lol(Handle:menu, MenuAction:action, client, param2)
{
	if (action == MenuAction_Select)
	{
		new String:id[50];
		GetMenuItem(menu, param2, id, sizeof(id));
		new item = StringToInt(id);
		if(item == 7)
		{
			MinigameMain(client);
		}
		
	}
	else if (action == MenuAction_End)
	{
		CloseHandle(menu);
	}
}