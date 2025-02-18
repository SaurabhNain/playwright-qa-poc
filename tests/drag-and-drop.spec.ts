import { test, expect } from '@playwright/test';
import { DragAndDropPage } from '../pages/DragAndDropPage';

test.describe('Drag and Drop Functionality', () => {
    let dragAndDropPage: DragAndDropPage;

    test.beforeEach(async ({ page }) => {
        dragAndDropPage = new DragAndDropPage(page);
        await dragAndDropPage.goto();
    });

    test('should swap column positions when dragging column A to B', async () => {
        await dragAndDropPage.dragColumnAToColumnB();
        
        // Verify the columns have swapped content
        expect(await dragAndDropPage.getColumnAText()).toBe('B');
        expect(await dragAndDropPage.getColumnBText()).toBe('A');
    });
});
