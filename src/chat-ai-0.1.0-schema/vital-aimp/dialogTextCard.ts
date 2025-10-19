import { Card } from './card';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-aimp#DialogTextCard
 */
export class DialogTextCard extends Card {
  public text?: string;
  public sectionHeaderHTML?: string;
  public conditionalLogic?: string;
  public questionCountExcluded?: boolean;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/vital-aimp#DialogTextCard';
  }

  /**
   * Get property definitions for DialogTextCard
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasText',
        tsPropertyName: 'text',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasSectionHeaderHTML',
        tsPropertyName: 'sectionHeaderHTML',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasConditionalLogic',
        tsPropertyName: 'conditionalLogic',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#isQuestionCountExcluded',
        tsPropertyName: 'questionCountExcluded',
        type: 'boolean',
        required: false
      }
    ];
  }


}
