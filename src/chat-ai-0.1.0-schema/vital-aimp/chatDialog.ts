import { Dialog } from './dialog';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-aimp#ChatDialog
 */
export class ChatDialog extends Dialog {



  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/vital-aimp#ChatDialog';
  }

  /**
   * Get property definitions for ChatDialog
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),

    ];
  }


}
