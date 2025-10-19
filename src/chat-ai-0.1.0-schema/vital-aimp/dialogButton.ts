import { Card } from './card';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-aimp#DialogButton
 */
export class DialogButton extends Card {
  public conditionalLogic?: string;
  public id?: string;
  public sectionHeaderHTML?: string;
  public questionCountExcluded?: boolean;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/vital-aimp#DialogButton';
  }

  /**
   * Get property definitions for DialogButton
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasConditionalLogic',
        tsPropertyName: 'conditionalLogic',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasId',
        tsPropertyName: 'id',
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
        propertyURI: 'http://vital.ai/ontology/vital-aimp#isQuestionCountExcluded',
        tsPropertyName: 'questionCountExcluded',
        type: 'boolean',
        required: false
      }
    ];
  }


}
