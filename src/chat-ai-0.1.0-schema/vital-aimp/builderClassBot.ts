import { Bot } from './bot';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-aimp#BuilderClassBot
 */
export class BuilderClassBot extends Bot {
  public builderClass?: string;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/vital-aimp#BuilderClassBot';
  }

  /**
   * Get property definitions for BuilderClassBot
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasBuilderClass',
        tsPropertyName: 'builderClass',
        type: 'string',
        required: false
      }
    ];
  }


}
