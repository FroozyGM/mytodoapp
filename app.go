package main

import (
	"context"
	"encoding/json"
	"os"
	"path/filepath"
)

type App struct {
	ctx context.Context
}

func NewApp() *App {
	return &App{}
}

func (a *App) startup(ctx context.Context) {
	a.ctx = ctx
}

type Task struct {
	Name        string `json:"name"`
	IsCompleted bool   `json:"isCompleted"`
	DueDate     string `json:"dueDate"`    
	Priority    string `json:"priority"`   
}

func (a *App) SaveTasks(tasks []Task) error {
	exePath, err := os.Executable()
	if err != nil {
		return err
	}
	appDir := filepath.Dir(exePath)
	
	filePath := filepath.Join(appDir, "tasks.json")
	data, err := json.Marshal(tasks)
	if err != nil {
		return err
	}
	
	return os.WriteFile(filePath, data, 0644)
}

func (a *App) LoadTasks() ([]Task, error) {
	exePath, err := os.Executable()
	if err != nil {
		return nil, err
	}
	appDir := filepath.Dir(exePath)
	
	filePath := filepath.Join(appDir, "tasks.json")
	
	if _, err := os.Stat(filePath); os.IsNotExist(err) {
		return []Task{}, nil
	}
	
	data, err := os.ReadFile(filePath)
	if err != nil {
		return nil, err
	}
	
	var tasks []Task
	err = json.Unmarshal(data, &tasks)
	if err != nil {
		return nil, err
	}
	
	return tasks, nil
}