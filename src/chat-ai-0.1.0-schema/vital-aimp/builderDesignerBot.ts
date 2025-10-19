import { Bot } from './bot';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-aimp#BuilderDesignerBot
 */
export class BuilderDesignerBot extends Bot {



  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/vital-aimp#BuilderDesignerBot';
  }

  /**
   * Get property definitions for BuilderDesignerBot
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),

    ];
  }


}
