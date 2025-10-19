import { Dialog } from './dialog';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-aimp#FormDialog
 */
export class FormDialog extends Dialog {



  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/vital-aimp#FormDialog';
  }

  /**
   * Get property definitions for FormDialog
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),

    ];
  }


}
