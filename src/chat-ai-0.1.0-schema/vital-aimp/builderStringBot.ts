import { Bot } from './bot';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-aimp#BuilderStringBot
 */
export class BuilderStringBot extends Bot {
  public builderString?: string;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/vital-aimp#BuilderStringBot';
  }

  /**
   * Get property definitions for BuilderStringBot
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasBuilderString',
        tsPropertyName: 'builderString',
        type: 'string',
        required: false
      }
    ];
  }


}
